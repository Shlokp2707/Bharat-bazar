import React, { useState } from 'react'
import { Link,  NavLink,useNavigate } from 'react-router-dom'
import Button from './Button'
import Congrats from '../pages/Congrats'
import Heart from './Heart'
const Card_w = () => {
  const [p,setp] = useState(femaleApi)
  const navigate =useNavigate();
  const [detail,setdetail] =useState([])
  const detailpage =(e)=>{
   setdetail([{...e}])
  } 
    return (
        <div>
{
        detail.map(({img,brand,disc,id,mrp ,rmrp, title,offer})=> 
           { 
          return(
<div className="text-gray-600  flex justify-center items-center font-serif w-full h-10/11 shadow-2xl z-10 absolute ">
  <div className="container  px-5  bg-white w-8/9 h-11/12 rounded-lg  mx-auto ">
  <button className='  absolute  text-3xl  top-3' onClick={()=> navigate(-0.5)}>❌</button>
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
                 <button className="flex ml-auto w-full h-16 mt-8 p-8 text-center items-center justify-center text-white text-2xl font-bold  bg-black border-0 py-2 px-6 focus:outline-none  rounded-lg hover:bg-green-500 active:text-3xl scale-100% active:scale-120 active:bg-green-700" onClick={()=>navigate("/congrats")}>  Buy Now</button>
</NavLink>
      </div>
    </div>
  </div>
</div>
           )
          }
        )}
        <div className='flex flex-row justify-center flex-wrap '>
   {    
      p.map((x)=>
     <section key={x.id} className='flex flex-wrap flex-row relative'>
             <div className=' scale-100 hover:scale-110 transition-transform duration-300 m-8 bg-white text-center justify-center w-72 h-auto  rounded-xl  box-border border-1 border- spacing-2 shadow-lg shadow-black flex-wrap border-black flex-row' key={x.id}>
      < Link onClick = {()=>detailpage(x)}>
         <img className="scale-100 hover:scale-105 w-11/12 m-2 hover:rounded-lg transition-transform duration-300" src={x.img} alt="Zoomable Image"></img>
      </Link>
        <div className='text-black text-lg font-semibold center hover:text-orange-400'>{x.brand}</div>
        <div  className='text-black  text-sm  center hover:text-red-700'>{x.title}</div>
        <span className='text-2xl font-bold '>&#8377; {x.mrp}</span>  
        <span className='text-red-600 ml-4 text-sm '>M.R.P <s>&#8377; {x.rmrp} </s></span>  
        <Link  onClick={()=>detailpage(x)}> 
            <Button >Buy Now</Button>
         </Link>
        </div>
        </section> 
        )}
    </div>
 </div>
  )
}
const femaleApi =[
    {
        id:"w1",
        brand:"",
        title:"Leriya Fashion Women Dress | One Piece Dress for Women | Dresses for Women | Trendi Dress for Women | Dress",
        disc:"Soft rayon blend: this one-piece dress for women is made of a soft rayon blend material, featuring with floral printed beach dress for women.Style & length: this birthday dress for women western has midi length,",
        mrp:379,
        rmrp:1099,
        offer:87,
        img:"female/fe1.jpg",
    },
    {
        id:"w2",
        brand:"Leriya Fashion",
        title:"Leriya Fashion Oversized Shirt for Women | Shirt for Women Stylish Western | Women Long Shirt",
        disc:"Versatile Style: Leriya Fashion women oversized printed shirt is used for Western Wear, birthday party wear, Office wear, casual wear, Beach Wear, Summer Wear, Hangouts, Picnic, Vacation Wear",
        mrp:339,
        rmrp:1099,
        offer:83,
        img:"female/fe2.jpg",
    },

    {
        id:"w3",
        brand:"ANNI DESIGNER",
        title:" ANNI DESIGNER Women's Cotton Blend Straight Printed Kurta with Pant & Dupatta",
        disc:"Kurta Set Fabric: Cotton Blend || Kurta Set Color :- Navy Blue Style: Straight || Length: Calf Length || Sleeves: 3/4 Sleeves || Size Chart- Kurta-S-36 in, M-38 in , L-40 in , XL-42 in , XXL-44 in,Pant :- S-28 in, M-30 ",
        mrp:579,
        rmrp:2599,
        offer:70,
        img:"female/fe3.jpg",
    },
    {
        id:"w4",
        brand:"KOTTY",
        title:"KOTTY Women's Single Breasted Relaxed Fit Shawl Collar 3/4 Sleeve Blazer",
        disc:"Fabric: Crafted from luxurious viscose Rayon for comfort and style.Fit: Designed with a flattering relaxed fit for versatile styling options.Wash Care: Easily maintainable with machine wash convenience.",
        mrp:299,
        rmrp:85,
        offer:1999,
        img:"female/fe4.jpg",
    },{
        id:"w5",
        brand:"MAX",   
        title:"Max Women Knee Length Dress",
        disc:"Women Floral Printed Midi Dress Women Floral Printed Midi Dress Color: Pink Pattern: Printed",
        mrp:799,
        rmrp:999,
        offer:20,
        img:"female/fe5.jpg ",
    },{
        id:"w6",
        brand:"The Souled Store",
        title:"The Souled Store Official Harry Potter: Magical Women and Girls Long Sleeves Collared Neck Button Front Brown All Over Printed Cotton Blend Boyfriend Shirts",
        disc:"HOMEGROWN INDIAN BRAND : One-stop-shop for Official Merch of All Your Favorite Superheroes, Films, TV Shows and Cartoons",
        mrp:1499,
        rmrp:1999,
        offer:25,
        img:"female/fe6.jpg",
    },{
        id:"w7",
        brand:"KOTTY",
        title:"KOTTY Women High Rise Relaxed Fit Cotton Lycra Blend Ankle Length Jeans",
        disc:"Fabric: Constructed with a durable cotton lycra blend, offering a perfect balance of comfort and flexibility for your active lifestyle.",
        mrp:442,
        rmrp:9,
        offer:78,
        img:"female/fe7.jpg",
    },{
        id:"w8",
        brand:"ADBUCKS",
        title:"ADBUCKS Womens Slim Fit Denim Lycra Stretchable Capri Mid Rise with Elasticated Waistband (Plus Size Also Available)",
        disc:"Silky Soft Denim Lycra Stretchable Capri with Elasticated Waistband. Plus Size option also available, click on the drop-down size list above. Size options include 28, 30, 32, 34, 36, 38, 40.",
        mrp:699,
        rmrp:1499,
        offer:53,
        img:"female/fe8.jpg",
    },{
        id:"w9",
        brand:"GoSriKi",
        title:"GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
        disc:"Kurta Set Fabric: Cotton Blend || Kurta Set Color :- Blue Style: Straight || Length: Calf Length || Sleeves: 3/4 Sleeves ",
        mrp:579,
        rmrp:76,
        offer:2599,
        img:"female/fe9.jpg",
    },

]
export default Card_w
