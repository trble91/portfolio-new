import React from 'react'

export default function Form() {
  return (
    <form action="/api/form" method="post" className='text-gray-500 text-2xl sm:text-gray-500'>
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required className='text-gray-100 bg-slate-400 rounded-lg'/>
 
      <label htmlFor="last" >Last Name</label>
      <input type="text" id="last" name="last" required className='text-gray-100 bg-slate-400 rounded-lg'/>
      
      <label htmlFor="email" >Email</label>
      <input type="email" id="email" name="email" required className='text-gray-100 bg-slate-400 rounded-lg'/>
      <textarea className='text-gray-100 bg-slate-400 rounded-lg mt-5'/>
      <button type="submit" className='text-gray-100 bg-slate-400 rounded-2xl mt-5 p-1 pr-2 pl-2'>Submit</button>
    </form>
  )
}
