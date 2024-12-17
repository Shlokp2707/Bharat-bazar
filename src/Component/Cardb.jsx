import React, { useState } from 'react'
import Button from './Button'
import Heart from './Heart'
import { Link, NavLink, useNavigate } from 'react-router-dom' 
const Cardb = ({ increaseCounter }) => {
    const [prop,setProp] =useState(fashionApi)
    const navigate =useNavigate();
    const [detail,setdetail] =useState([])
    const detailpage =(e)=>{
     setdetail([{...e}])
    } 
    return (
    <div>
{ detail.map(({img,brand,disc,id,mrp ,rmrp, title,offer})=> 
           { 
             return(
<section className="text-gray-600  flex justify-center items-center font-serif w-full h-10/11 shadow-2xl my-96 z-10 absolute ">
  <div className="container  px-5  bg-white w-8/9 h-13/11 rounded-lg mx-auto">
  <button className='  absolute  text-3xl  top-3  ' onClick={()=> navigate(-0.5)}>❌</button>
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" className="lg:w-1/2 w-full shadow-lg bg-gray-200  lg:h-auto h-64 object-cover object-center rounded" src={img}/>
          <div className="lg:w-1/2 w-full lg:pl-10  lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>   
        <h1 className="text-gray-900 text-4xl  font-semibold  mb-1">{brand}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">{id} Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>      
        </div>
        <p className="leading-relaxed text-lg">{title}</p>
        <div className='flex  flex-col m-5 justify-between'>
        <div className="flex justify-start m-4 text-center">
          <span className="title-font  text-6xl font-bold text-gray-900">₹ {mrp}</span>
        <span className='text-red-600 ml-4 text-xl '>M.R.P <s>&#8377; {rmrp} </s></span>  
        </div>
        <p className="leading-relaxed text-lg "><b className='text-lg'> Discription:</b> {disc}</p>
        <div className='w-full h-auto flex justify-end'>
          <button className="flex  w-72 h-16 text-center items-center justify-center text-white text-xl font-bold  bg-black border-0 py-2 px-4 focus:outline-none  rounded-full hover:bg-green-500 active:text-2xl scale-100% active:scale-120 active:bg-green-700  "> <i className=" fa fas fa-shopping-cart mr-4 "/> Add To Cart</button>
        </div>
        </div>  
        <div className='flex justify-start  items-center'>
        <div className='bg-red-600  w-1/2 h-14  text-lg text-white flex justify-center items-center font-semibold  mt-5 '>{offer} % OFF  diwali festive sale</div>   
        <div className='flex justify-center items-center w-20 h-20'> 
                       <Heart></Heart>
         </div>   
         </div>       
          <NavLink className=' m-4 flex items-center justify-start w-full h-auto ' to="/congrats">
          
                 <button className="flex ml-auto w-full h-16 mt-8 p-8 text-center items-center justify-center text-white text-2xl font-bold  bg-black border-0 py-2 px-6 focus:outline-none  rounded-lg hover:bg-green-500 active:text-3xl scale-100% active:scale-120 active:bg-green-700  ">  Buy Now</button>
</NavLink>
      </div>
    </div>
  </div>
</section>
           )})}
    <div className='flex flex-row z-1 justify-center relative flex-wrap' >
     { prop.map((x,index)=>
     <section key={x.id} className='flex flex-wrap flex-row'>
             <div className=' scale-100 hover:scale-110 transition-transform duration-300 m-8 bg-white text-center justify-center w-72 h-auto  rounded-xl  box-border  border-1 border-spacing-2 shadow-lg  shadow-black flex-wrap border-black flex-row text-white' key={x.id} >
      <Link>  
         <img className="scale-100 hover:scale-105  w-11/12 m-2 hover:rounded-lg transition-transform duration-300" 
         src={x.img} onClick = {()=>detailpage(x)}  alt="Zoomable Image"/>       
    </Link>
        <div className='text-black text-lg font-semibold center hover:text-orange-400'>{x.brand}</div>
        <div  className='text-black  text-sm  center hover:text-red-700'>{x.title.slice(0,70)}</div>
        <span className='text-2xl  text-black font-bold '>₹ {x.mrp}</span>  
        <span className='text-red-600 ml-4 text-sm '>M.R.P <s>&#8377; {x.rmrp} </s></span>  
         <Link onClick={()=>detailpage(x)}> 
            <Button>Buy Now</Button>
         </Link>
        </div>
        </section> 
        )}
      </div>
      </div>
  )
}
const fashionApi=[
  {
      id:1,
      brand:"Bewakoof",
      title:"Bewakoof Official DC Merchandise Men's Printed Regular Fit Full Sleeve Round Neck Cotton T-Shirt",
      disc:"Fitted at Chest and Straight on Waist Down Bewakoof Official DC Merchandise Men's Printed Regular Fit Full Sleeve Round Neck Cotton T-Shirt Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend ",
      mrp:350,
      rmrp:1299,
      offer:73,
      img:"images/t-shirt_1.jpg",
  },
  {
      id:2,
      brand:"The Indian Garage ",
      title:"The Indian Garage Co Men's Slim Fit Shirt",
      disc:"Customers like the quality, fit, and sizing of the shirt. They mention it has good feeting or fabrics. However, some customers have reported that the color is not as expected and it leaches color just once put in water.",
      mrp:448,
      rmrp:2099,
      offer:70,
      img:"images/t-shirt_2.jpg",
  },
  {
      id:3,
      brand:"The Souled Store Plaid",
      title:"The Souled Store Plaid: Brown Mustard and Black Men and Boys Relaxed fit Striped Full Sleeve Cotton Multicolored Men Relaxed Shirts Shirt For Men Casual Half Sleeves Regular Fit Printed Stylish Latest",
      disc:"Homegrown Indian Brand - One-stop-shop for Official Merch of all your favorite superheroes, films, TV shows and cartoons Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend ",
      mrp:1499,
      rmrp:1099,
      offer:25,
      img:"images/t-shirt_3.jpg",
  },
  {
      id:4,
      brand:"Puma",
      title:"Puma Men's Regular Fit T-Shirt Designed for comfortable wear for sports and street-style",
      disc:"Designed for comfortable wear for sports and street-style, PUMA apparels are always fun to wear. Upgrade in style with wide range of apparels form the world’s leading and much-loved sports brand, PUMA.",
      mrp:499,
      rmrp:1299,
      offer:59,
      img:"images/tshisrt4.jpg",
  },{
      id:5,
      brand:"lymio",
      title:"Lymio Men T-Shirt || T-Shirt for Men || Plain T Shirt || T-Shirt (Polo-18-21)",
      disc:"Men T Shirt || T-Shirt For Men || Plain T Shirt || T-Shirt Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend ",
      mrp:349,
      rmrp:1099,
      offer:89,
      img:"images/t-shirt_5.jpg",
  },
  {
      id:6,
      brand:"DEELMO",
      title:"DEELMO Men's Cotton Blend Mandarin Collar Self One Design Full Sleeve Casual Short Kurta",
      disc:"Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend fabric.",
      mrp:494,
      rmrp:2199,
      offer:78,
      img:"images/t-shirt_6jpg.jpg",
  },
  {
      id:7,
      brand:"NIMAVAT FABS",
      title:"NIMAVAT FABS Men's Printed Cotton Relaxed Fit Long Sleeve Mandarian Collared Casual Lightweight Comfortable Short Kurta (T_E_220624)",
      disc:"This Kurta made of qulity material.Classy & Charming Look Upgrade your fashion quotient with these shirts for men as they give you a new look and appeal.",
      mrp:499,
      rmrp:2099,
      offer:83,
      img:"images/t-shirt_7.jpg",
  },
  // pants
  {
      id:8,
      brand:"The Souled Store",
      title:"The Souled Store Men TSS Originals: Navy Printed Joggers",
      disc:"Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men Cargos for Men (Cargo-09-12 Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend ",
      mrp:999,
      rmrp:1999,
      offer:50,
      img:"images/pant_1.jpg",
  },

  {
      id:9,
      brand:"Lymio",
      title:"Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-09-12)",
      disc:"Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men Cargos for Men (Cargo-09-12 Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend ",
      mrp:549,
      rmrp:4999,
      offer:89,
      img:"images/pant_2.jpg",
  },
  {
      id:10,
      brand:"Lymio ",
      title:"Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)",
      disc:"Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend fabric.",
      mrp:499,
      rmrp:4099,
      img:"images/pant_3.jpg",
      offer:50,
  },
  {
      id:11,
      brand:"PETER ENGLAND",
      title:"PETER ENGLAND JEANS Men Pants",
      disc:"Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend fabric.",
      mrp:769,
      rmrp:1699,
      offer:55,
      img:"images/p.jpg",
  },
  {
      id:12,
      brand:"BLACK FLU ",
      title:"BLACK FLU Men Tapered Fit Mid-Rise Jeans Plus Size Men's Regular Fit Jeans Set-1",
      disc:"Men's jeans are a staple in casual and everyday fashion. They typically feature a sturdy denim fabric and come in various styles, fits, and washes to suit different preferences and occasions. Here's a general Men's jeans are commonly made from denim",
      mrp:1299,
      rmrp:1999,
      offer:35,
      img:"images/pant_4.jpg",
  },
  ,{
    id:13,
    brand:"lymio",
    title:"Lymio Men T-Shirt || T-Shirt for Men || Plain T Shirt || T-Shirt (Polo-18-21)",
    disc:"Men T Shirt || T-Shirt For Men || Plain T Shirt || T-Shirt Breathable and Comfortable Cotton Blend: Enjoy the softness and breathability of our premium cotton blend ",
    mrp:349,
    rmrp:1099,
    offer:89,
    img:"images/t-shirt_5.jpg",
},
]

export default Cardb
