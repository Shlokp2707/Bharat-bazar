import React from 'react'
const Button = ({children }) =>{
  return (
    <div>
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-lg rounded-lg text-lg px-5 py-1.5  mt-2 text-center me-2 mb-2 scale-100  active:scale-105" >{children}</button>
    </div>
  )
}
export default Button
