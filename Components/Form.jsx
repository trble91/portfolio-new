import React from 'react';

export default function Form() {
  return (
    <form action="mailto:daleyaaron@gmail.com" method="post" className='text-gray-500 text-2xl sm:text-gray-500'>
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required className='text-gray-500 bg-gray-100 rounded-lg uppercase'/>
 
      <label htmlFor="last" >Last Name</label>
      <input type="text" id="last" name="last" required className='text-gray-500 bg-gray-100 rounded-lg uppercase'/>
      
      <label htmlFor="email" >Email</label>
      <input type="email" id="email" name="email" required className='text-gray-500 bg-gray-100 rounded-lg'/>
      <textarea className='text-gray-500  bg-gray-100 rounded-lg mt-5'/>
      <button type="submit" className="bg-gray-100 hover:bg-gray-300 text-gray-500 text-sm font-thin uppercase border rounded-2xl border-gray-400 shadow mt-5 py-2 px-4 p-1 pr-2 pl-2">Submit</button>
    </form>
  )
}
