import { connect } from "react-redux"

import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { Navigate } from "react-router-dom"

// Icons
import { ChevronRightIcon } from "@heroicons/react/outline"
import LoadingFullWidth from "components/loaders/LoadingFullWidth"

// Web3
import { loginweb3 } from 'redux/actions/web3'


 function Acceder({
    loading,
    loginweb3,
    account,
    my_user
 }) {

    if(my_user){
        return <Navigate to='/' />


    }

  return (
    <FullWidthLayout>
        <div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-gilroy-bold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Acceder con Web3
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-zinc-400">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>
      </div>
    </div>
  {
    !loading ?
    (  <div className="bg-white dark:bg-dark-main hover:dark:bg-dark-second hover:bg-gray-50 shadow overflow-hidden sm:rounded-md">
    <ul role="list" className="divide-y divide-gray-200">
        <li>
            <div
                className="block  transition duration-300 ease-in-out cursor-pointer"
                onClick={()=>{loginweb3()}}
            >
                <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-12 w-12 rounded-full"
                                src="https://bafybeig2busro4zb47v54tvsfrm65k7342e5pojww26ys2bi2msxhf6ei4.ipfs.dweb.link/metamask-2728406-2261817.webp"
                                alt=""
                            />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                                <p className="text-sm font-medium dark:text-dark-txt text-gray-800 truncate">
                                    Metamask
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <div>
                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        Popular
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ChevronRightIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>)
    :
    <LoadingFullWidth/> 
  }
        </FullWidthLayout>
  )
}

const mapStateToProps = state =>({
    loading: state.web3.loading,
    account: state.web3.account,
    my_user: state.user.my_user
})

export default connect(mapStateToProps,{
    loginweb3,
})(Acceder)