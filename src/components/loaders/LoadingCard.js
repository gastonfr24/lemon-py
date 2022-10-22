const LoadingCard =()=>{
    return(

        <div className="animate-pulse bg-gray-200 dark:bg-zinc-900 flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <div
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="animate-pulse bg-gray-300 dark:bg-zinc-900 flex-1 p-16 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
              </p>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                </p>
                <p className="mt-3 text-base text-gray-500"> Loading...</p>
              </div>
            </div>
          </div>
        </div>


    )
}
export default LoadingCard