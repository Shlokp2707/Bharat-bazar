import React from 'react'
import  { useState } from 'react'
import Button from './Button'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Heart from './Heart';
const Card_m = ()  => {
const [m,setM] = useState(mobile)
 const [detail,setdetail] =useState([])
   const detailpage =(e)=>{
    setdetail([{...e}])
   }  
   const navigate =useNavigate()  
  return (
    <div> 
{
        detail.map(({img,name,disc,id,mrp ,rmrp,offer})=> 
           {  return(
<section className="text-gray-600  flex justify-center items-center font-serif ml-40 shadow-2xl z-10 absolute">
  <div className="container  px-5  bg-white w-6/7 h-11/12 rounded-lg py-24 mx-auto">
  <button className='  absolute  text-3xl  top-3  ' onClick={()=> navigate(-0.5)}>❌</button>
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" className="lg:w-1/2 w-full shadow-lg bg-gray-200  lg:h-auto h-64 object-cover object-center rounded" src={img}/>
          <div className="lg:w-1/2 w-full lg:pl-10  lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>   
        <h1 className="text-gray-900 text-4xl  font-semibold  mb-1">{name}</h1>
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
        <p className="leading-relaxed text-lg">{disc}</p>
        <div className='flex  flex-col m-5 justify-between'>
        <div className="flex justify-start m-4 text-center">
          <span className="title-font  text-6xl font-bold text-gray-900">₹ {mrp}</span>
        <span className='text-red-600 ml-4 text-xl '>M.R.P <s>&#8377; {rmrp} </s></span>  
        </div>
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
                                  <button to="/congrats" className="flex ml-auto w-full h-16 mt-8 p-8 text-center items-center justify-center text-white text-2xl font-bold  bg-black border-0 py-2 px-6 focus:outline-none  rounded-lg hover:bg-green-500 active:text-3xl scale-100% active:scale-120 active:bg-green-700">Buy Now</button>
                </NavLink>
       </div>
    </div>
  </div>
</section>
           )
          }
          )}
        <div className='flex flex-row justify-center flex-wrap z-1 relative'>  
         {
          m.map((x)=>
         <section key={x.id} className='flex flex-wrap flex-row'>
                 <div className=' scale-100 hover:scale-110 transition-transform duration-300 m-8 bg-white text-center justify-center w-72 h-auto  rounded-xl  box-border  border-1 border-spacing-2 shadow-lg  shadow-black flex-wrap border-black flex-row ' key={x.id} >
          <Link >
             <img className="scale-100 hover:scale-105 w-11/12 m-2 hover:rounded-lg transition-transform duration-300" src={x.img} onClick = {()=>detailpage(x)} alt="Zoomable Image"></img>
          </Link>
            <div className='text-black text-lg font-semibold center hover:text-orange-400'>{x.name}</div>
            <div  className='text-black  text-sm  center hover:text-red-700'>{x.disc}</div>
            <span className='text-2xl font-bold '>&#8377; {x.mrp}</span>  
            <span className='text-red-600 ml-4 text-sm '>M.R.P <s>&#8377; {x.rmrp} </s></span>
            <Link  onClick={()=>detailpage(x)}> 
            <Button >Buy Now</Button>
         </Link>
      </div>
   </section> 
            )
          }
  </div>
</div>
      ) }
export default Card_m
const mobile =[
      {
       id:"m1",
       name:"Redmi 13",
       disc:"Redmi 13 5G, Orchid Pink, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment",
       img:"mo1.jpg",
       mrp:13999,
       rmrp:17000,
       offer:25,   
      },
      
      {
          id:"m2",
          name:"Redmi Note 13 Pro",
          disc:"Redmi Note 13 Pro (Coral Purple, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge",
          img:"mobiles/mo4.jpg",
          mrp:22999,
          rmrp:28999,
          offer:25,   
         },
     
         {
          id:"m3",
          name:"OnePlus Nord CE4 Lite",
          disc:"OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)",
          mrp:13008,
          img:"mobiles/mo7.jpg",
          rmrp:20999, 
          offer:5,   
         },
      {
          id:"m4",
          name:"Motorola Edge 50 Pro",
          disc:"Motorola Edge 50 Pro 5G with 125W Charger (Luxe Lavender, 256 GB) (12 GB RAM)",
          mrp:32498,
          img:"https://m.media-amazon.com/images/I/715aoVxQNTL._SX679_.jpg",
          rmrp:41999,
          offer:23,   
         },
         {
          id:"m5",
          name:"Samsung Galaxy S24 Ultra",
          disc:"Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage)",
          mrp:131999,
          img:"mobiles/mo6.jpg",
          rmrp:41999,
          offer:23,   
         },
         {
          id:"m6",
          name:"Samsung Galaxy S22 ",
          disc:"Samsung Galaxy S22 5G (Phantom Black, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
          mrp:36170,
          img:"mobiles/mo8.jpg",
          rmrp:85999,
          offer:58,   
         },
         {
          id:"m7",
          name:"Lava Agni 2 ",
          disc:"Lava Agni 2 5G (Glass Viridian, 8GB RAM, 256GB Storage) | India's First Dimensity 7050 Processor | 120 Hz Curved Amoled Display | 13 5G Bands | Superfast 66W Charging | Clean Android",
          mrp:16999,
          img:"mobiles/mo9.jpg",
          rmrp:35999,
          offer:35,   
         },
         {
          id:"m8",
          name:"Samsung Galaxy S24 Ultra",
          disc:"Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage)",
          mrp:131999,
          img:"mobiles/mo6.jpg",
          rmrp:41999,
          offer:23,   
         },
        ]  
