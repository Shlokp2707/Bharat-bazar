import React from 'react'
import { } from "react-icons/fa";
import { FaFacebookSquare ,FaGoogle,FaLinkedin ,FaTelegram} from "react-icons/fa";
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
    <div>
        <section>
        <div class="bg-orange-400 rounded-se-full  shadow-2xl border-yellow-600 border-4 rounded-ss-full">
    <div class="max-w-screen-lg  px-4 sm:px-6 text-white text-2xl  sm:flex justify-between mx-auto">
        <div class="p-1 sm:w-2/12 border-r">
            <div class="text-2xl uppercase text-indigo  -600  mt-5 font-bold">Menu</div>
            <ul>
                <li class="my-1">
                    <Link  to ="/" class="hover:text-red-600 hover:underline underline-offset-4" >Home</Link>
                </li>
                <li class="my-1">
                    <Link to="/login" class="hover:text-red-600 hover:underline underline-offset-4" >Login</Link>
                </li>
                <li class="my-1">
                    <Link to="/help" class="hover:text-red-600 hover:underline underline-offset-4" >Help</Link>
                </li>
            </ul>
        </div>
        <div class="p-2 sm:w-7/12 border-r-4 text-center">
            <h3 class="font-bold text-2xl text-indigo-600 mb-2"></h3>
            <p class="text-white text-lg mb-2 mt-6">“Welcome to our store! We offer quality products at unbeatable prices. Enjoy a seamless shopping experience with the latest trends and best deals. Your satisfaction is our priority. Thank you for choosing us. Happy shopping!"</p>
        </div>
        <div class="p-5 sm:w-3/12">
            <div class="text-xl uppercase text-indigo-600 font-bold">contact us</div>
            <ul>
                <li class="my-2">
                    <p class="hover:text-indigo-600" href="#">XXX XXXX, Floor 4 kalyanpur, Kanpur nagar,</p>
                </li>
                <li class="my-2">
                    <p class="hover:text-indigo-600" href="#">contact@company.com</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex py-3 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div class="md:flex-auto md:flex-row-reverse mt-1 flex-row flex">
            
            <Link href="#" class="w-6 mx-1 text-2xl ml-8 text-blue-800">
            <FaFacebookSquare />
            </Link>
            <Link href="#" class="w-6 mx-1 text-2xl ml-8 text-blue-800">
               <FaGoogle></FaGoogle> 
            </Link>
            <Link href="#" class="w-6 mx-1 text-2xl ml-8 text-blue-800">
                <FaLinkedin ></FaLinkedin>
            </Link>
            <Link href="#" class="w-6 mx-1 text-2xl ml-8 text-blue-800">
            <FaTelegram/>
            </Link>
        </div>
        <div class="my-5 mb-1 text-md font-bold">© Copyright 2023. All Rights Reserved.</div>
    </div>
</div>
            </section>
   </div>
  )}
export default Footer
