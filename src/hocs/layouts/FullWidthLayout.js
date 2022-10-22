import { connect } from "react-redux";

import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Alert from "components/alerts/alert";
import { useEffect } from "react";
import { get_network_id, loadweb3 } from "redux/actions/web3";
import { get_my_user_detail } from "redux/actions/user";


const FullWidthLayout = ({children, loadweb3, get_network_id, my_user, get_my_user_detail}) =>{

    if(window.ethereum){
        window.ethereum.on("chainChanged", handleChainChanged)
        function handleChainChanged(_chainId) {
            window.ethereum.reload()
        }
    }






    useEffect(() => {
      
        const fetchData = async () =>{
            if(localStorage.getItem('account')){
                loadweb3()
                my_user ? <></>: get_my_user_detail()

            }

        }

        if(window.ethereum){
            get_network_id()
        }

        fetchData()
    }, [])
    

    return(
    
        <>
        <Navbar/>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </div>
        <Footer/>
        <Alert/>
        </>
    )
}


const mapStateToProps = state =>({
my_user: state.user.my_user
})

export default connect(mapStateToProps,{
    loadweb3, get_network_id, get_my_user_detail
})(FullWidthLayout);