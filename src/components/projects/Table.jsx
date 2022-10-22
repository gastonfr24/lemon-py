import React from 'react'

function Table({th, td, len=0}) {
  return (

   <div className="box-content py-2 relative overflow-x-auto overflow-visible">
  <div className=" min-w-screen-xl px-4 flex space-x-8 sm:px-6 md:relative lg:px-8 relative px-0 space-x-0 grid grid-cols-5 gap-x-8">
       

    <table className="rounded-t-lg m-5 w-3/6 mx-auto bg-gray-200 text-gray-800 dark:bg-zinc-800 ">
  <tr className="text-left border-b-2 border-gray-300 font-gilroy-bold dark:text-zinc-500 dark: dark:border-zinc-900">
    
    {
        th.map((header, index) =>(
            
            <th className="px-4 py-3">{header}</th>
        ))
    }
  </tr>


    {
        td.map((item, index) =>(
            <tr className="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-900">
          {item.map((fila, index) =>(
            <th className="px-4 py-3">{fila}</th>
           ))}
            </tr> 
        ))
    }





</table>
</div>
<div className='md:pl-8'>
  <span className='bg-zinc-300 dark:bg-zinc-800 px-3 py-1 rounded-xl dark:text-zinc-400 text-zinc-600'
>{len[0]} rows x {len[1]} columns
</span>
</div>

</div>



  )
}

export default Table