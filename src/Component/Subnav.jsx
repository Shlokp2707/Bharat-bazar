import React from 'react'
import {NavLink} from "react-router-dom"
import  './Header/Nav.css'
const Subnav = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <section className='flex container m-5 ml-16 mb-0 justify-around rounded-lg scale-100 bg-white hover:transition-all hover:'>
        <div className='w-40 h-48  rounded-full  flex items-center justify-center flex-col'>
           <div className='w-32 h-32 rounded-3xl flex items-center justify-center'>
           <NavLink to="/cardm"> <img src="https://mrphonerepair.co.uk/wp-content/uploads/2017/10/Samsung-Galaxy-s6-Edge-Plus.png" alt= "" className='w-28  hover:w-32 h-32 rounded-full' /></NavLink>
           </div>
          <NavLink to="/cardm">
            <span className='text-xl font-bold active:text-2xl hover:underline underline-offset-4 decoration-4 '>Mobiles</span>
            </NavLink>
        </div>
        <div className='w-40 h-48  rounded-full flex items-center justify-center flex-col'>
           <div className='w-48 h-32 rounded-3xl flex items-center justify-center'>
           <NavLink to="/laptop"> <img src="https://th.bing.com/th/id/R.f6167ed97074b084b04dff7ffeb3e483?rik=GkWmZ93QxtWA7g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flaptop-png-transparent%2flaptop-png-transparent-18.png&ehk=8YyWqygqp7TP9QZl%2fhoBd44TA6dbUNaY1Ql1u5Bn0V0%3d&risl=1&pid=ImgRaw&r=0" alt= ""className='w-40 h-28 hover:w-48 h-32' /></NavLink>
           </div>
          <NavLink to="/laptop">
            <span className='text-xl font-bold active:text-2xl hover:underline underline-offset-4 decoration-4 '>Laptop</span>
            </NavLink>
        </div>
        <div className='w-40 h-48  rounded-full flex items-center justify-center flex-col'> 
           <div className='w-32 h-32 rounded-3xl flex items-center justify-center'>
           <NavLink to="/cardw"> <img src="https://th.bing.com/th/id/R.03559aff5dec0e085c225fc46b97fdba?rik=%2bfhGEz4ieBn1tA&riu=http%3a%2f%2ffreepngclipart.com%2fdownload%2ffashion%2f79817-shopping-woman-fashion-beauty-free-download-image.png&ehk=wzkt5ufx%2bprumuXzLHJ6%2b3NyL2z0s7vjrnW1srVPf5s%3d&risl=&pid=ImgRaw&r=0" alt= ""className='w-28 h-28 hover:w-32 h-32' /></NavLink>
           </div>
          <NavLink to="/cardw">
            <span className='text-xl font-bold active:text-2xl hover:underline underline-offset-4 decoration-4 '>women</span>
            </NavLink>
        </div>
        <div className='w-40 h-48  rounded-full flex items-center justify-center flex-col'>
           <div className='w-32 h-32 rounded-3xl flex items-center justify-center'>
           <NavLink to="/cardf"> <img src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-3d-rendering-fashion-shopping-men-png-image_10024008.png" alt= ""className='w-28 h-28 hover:w-32 h-32' /></NavLink>
           </div>
           <NavLink to= "/cardf">
              <span className='text-xl font-bold active:text-2xl hover:underline underline-offset-4 decoration-4 '>Men</span>
           </NavLink>
        </div>
      </section>
    </div>
  )
}
export default Subnav
