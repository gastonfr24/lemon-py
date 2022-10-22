const LoadingCardCategory =()=>{
    return(
        
        <div
        className="animate-pulse bg-gray-300 dark:bg-zinc-900 relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden"
      >
        <span aria-hidden="true" className="absolute inset-0">
          <div src="#" alt="#" className="w-full h-full object-center object-cover" ></div>
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/3 "
        />
        <span className="relative mt-auto text-center text-xl font-bold text-white">Loading...</span>
      </div>

    )
}
export default LoadingCardCategory