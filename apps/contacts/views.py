from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Contact
from django.core.mail import send_mail

from django.conf import settings
import requests

# ACTIVECAMPAIN
activecampaign_url = settings.ACTIVE_CAMPAIGN_URL
activecampaign_key = settings.ACTIVE_CAMPAIGN_KEY

class ContactCreateView(APIView):
    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email= data['email']
        subject = data['subject']
        message = data['message']
        phone = data['phone']
        budget = data['budget']

        message_email = ('Name: ' + name +
                        '\nEmail: ' + email +
                        '\n\n' + message +
                        '\n\nTelefono: '+ phone+
                        '\nPrice: '+ budget)

        try:
            send_mail(
                subject,
                message_email,
                # quien manda
                'lavoucra@gmail.com',
                # a quienes les llega   
                ['gastonfr24@gmail.com'],
                fail_silently=False
            )

            Contact.objects.create(
                    name=name,
                    email=email,
                    subject=subject,
                    phone=message,
                    message=phone,
                    budget=budget
                    )


# Contacto
            # Creando contacto ActiveCampaign
            url = activecampaign_url + '/api/3/contact/sync'

            # Envío
            data = {'contact':
                {
                'email':email,
                'firstName':name,
                'phone': phone,
                }
            }

            headers={
                'Accept':'application/json',
                'Content-Type': 'application/json',
                'Api-Token': activecampaign_key
            }



            response = requests.post(url, json=data, headers=headers)
            if response.status_code != 201 and response.status_code != 200:
                return Response({'error':'Ha ocurrido un error al crear el contacto'}, 
                status= status.HTTP_500_INTERNAL_SERVER_ERROR)

            contact = response.json()


            try:
                contact_id = str(contact['contact']['id'])

            except:
                return Response({'error':'Algo a ocurrido al traer el ID del contacto'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#TAG
            # URL tag create
            tag_url = activecampaign_url + '/api/3/contactTags'



            tag_data = {
                    "contactTag": {
                        "contact": contact_id,
                        "tag": "2"
                    }
                }

            response = requests.post(tag_url, json=tag_data, headers=headers)
            if response.status_code != 201 and response.status_code != 200:
                return Response({'error':'Ha ocurrido un error al añadir el tag'}, 
                status= status.HTTP_500_INTERNAL_SERVER_ERROR)


#LIST
            list_url = activecampaign_url + '/api/3/contactLists'

            list_data = {
                        "contactList": {
                            "list": '1',
                            "contact": contact_id,
                            "status": 1
                        }
                    }
            print(list_data)
            response = requests.post(list_url, json=list_data, headers=headers)
            if response.status_code != 201 and response.status_code != 200:
                return Response({'error':'Ha ocurrido un error al añadir el contacto a la lista'}, 
                status= status.HTTP_500_INTERNAL_SERVER_ERROR)




            return Response({'success':'Mensaje enviado correctamente'})
        except:
            return Response({'error':'El mensaje no se ha podido enviar'})


      

 