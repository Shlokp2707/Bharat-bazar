import React, { useState } from 'react'
   import Button from './Button'
    import { Link, NavLink, useNavigate } from 'react-router-dom'
    import './header/Nav.css';
import Heart from './Heart';
const Card_L = () => {
  const [l,setL] = useState(laptop)
  const navigate =useNavigate();
  const [detail,setdetail] =useState([])
  const detailpage =(e)=>{
   setdetail([{...e}])
  }
  return (
    <div> 
{  detail.map(({img,brand,disc,id,mrp ,rmrp, title,offer})=> 
           { 
             return(
<section className="text-gray-600  flex justify-center items-center font-serif w-full h-10/11 shadow-2xl z-10 absolute ">
  <div className="container px-5 bg-white w-8/9 h-11/12 rounded-lg mx-auto my-96">
  <button className='absolute text-3xl ' onClick={()=> navigate(-0.5)}>❌</button>
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" className="lg:w-1/2 w-full shadow-lg bg-gray-200  lg:h-auto h-64 object-cover object-center rounded" src={img}/>
          <div className="lg:w-1/2 w-full lg:pl-10  lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500"></h2>   
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
            <Link className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </Link>
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
           )
        }
      )}
       <div className='flex flex-row flex-wrap justify-center ' >
        <div className='w-full h-auto m-8 flex justify-center '>|
         <img src="offerlap.jpg" alt="sorry" className='width-[600px] rounded-xl scale-x-150 scale-y-105' />
         </div>
         {
          l.map((x)=>
         <section key={x.id} className='flex flex-wrap flex-row'>
                 <div className=' scale-100 hover:scale-110 transition-transform duration-300 m-8 bg-white text-center justify-center w-72 h-auto  rounded-xl box-border  border-1 border-spacing-2 shadow-lg  shadow-black flex-wrap border-black flex-row ' key={x.id} >

          <Link  onClick = {()=>detailpage(x)}>
             <img className="scale-100 hover:scale-105 w-11/12 h-[340px] m-2 hover:rounded-lg transition-transform duration-300" src={x.img} alt="Zoomable Image"></img>
          </Link>
            <div className='text-black text-lg mb-2 font-semibold center hover:text-orange-400'>{x.name}</div>
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
  )}
const laptop = [
    {
      name: "Acer ALG Gaming Laptop ",  
      id:"l1",
        title:"Acer ALG 12th Gen Intel Core i5 Gaming Laptop (16GB RAM/512GB SSD/4GB RTX 2050 Graphics/60Hz/Win11Home/Wifi 6) AL15G-52, 39.62cm (15.6 inch) FHD Display, Premium Metal Body, Steel Gray, 1.99KG",
        disc:"Powerful Productivity: 12th Generation Intel Core i5-12450H Dual Core processor delivers unmatched speed and intelligence, enabling impressive creating, productivity, and gaming experiences. With Turbo Boost Technology, get up to 4.4GHz for your high-demand applications. Connectivity Technology: Wi-Fi, Bluetooth, HDMI",
        img:"laptop/lap1.jpg",
        mrp:50999,
        rmrp:89990,
        offer:43,   
       },

       {
        name:"Acer Nitro V Gaming Laptop" ,
        id:"l2",
        title:"Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD/Windows 11 Home/Wi-Fi 6),15.6(39.6cms) FHD ANV15-51",
       disc:"Processor: Intel Core i5-13420H processor - 8 cores, max turbo up to 4.60 Ghz | RAM : 16 GB of DDR5 system memory, upgradable to 32 GB (Memory Frequency: Up to 5200 MT/s) Display : 15.6 display with IPS (In-Plane Switching) technology, ",
       img:"laptop/lap2.jpg",
       mrp:74990,
       rmrp:103999,
       offer:28,   
      },

{
  name:"ASUS TUF F17 Gaming Laptop" ,  
  id:"l3",
    title:"ASUS TUF F17 Gaming Laptop, Intel Core i5-11400H 11th Gen, 17.3-inch (43.94 cm) 144Hz, (8GB RAM/512GB SSD/4GB NVIDIA GeForce RTX 2050/Windows 11/ RGB Backlit KB/Black/2.30 kg), FX706HF-HX018W",
   disc:"Processor: Intel Core i5-11400H Processor 2.7 GHz (12M Cache, up to 4.5 GHz, 6 Cores) improving multitasking performance & Designed to handle high loadsStorage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 1x M.2 Slot for SSD Storage expansion | Memory: 16GB SO-DIMM DDR4 3200MHz Support Up to 32GB 2x SO-DIMM slots",
   img:"laptop/lap3.jpg",
   mrp:48990,
   rmrp:75990,
   offer:36,   
  },
  {
    name:"HP Victus Gaming Laptop" ,
    id:"l4",
   disc:" ",
   title:"HP Victus Gaming Laptop,Windows 11 Home,AMD Ryzen 5 5600H,4Gb RTX 3050 Gpu,15.6-Inch (39.6 Cm),Fhd,IPS,144Hz,16Gb Ddr4,512Gb Ssd,Backlit Kb,B&O,9Ms Response Time,Dual Speakers (Blue,2.37 Kg),Fb0106Ax",
   img:"laptop/fe4.jpg",
   mrp:57990,
   rmrp:84689,
   offer:32,   
  },{
    name:"ASUS TUF Gaming A15" ,
    id:"l5",
   disc:"Processor : AMD Ryzen 9 8945H Processor 4GHz (24MB Cache, up to 5.2 GHz, 8 cores, 16 Threads) AMD Ryzen AI up to 39 TOPsDisplay :15.6-inch, FHD (1920 x 1080) 16:9, 144hz, 250 nits Brightness, Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
   title:"ASUS TUF Gaming A15, 15.6 FHD 144Hz 250nits, AMD Ryzen 9 8945H Processor, Gaming Laptop (32GB RAM/1TB SSD NVIDIA GeForce RTX 4060/Windows 11/Office Home/Mecha Gray/2.2 Kg), FA507UV-LP137WS",
   img:"laptop/lap5.jpg",
   mrp:141400,
   rmrp:189000,
   offer:25,   
  }
  ,{
    name: "HP OMEN Gaming Laptop",
    id:"l6",
   disc:"Processor: AMD Ryzen 7 7840HS (up to 5.1 GHz max boost clock, 16 MB L3 cache, 8 cores, 16 threads)| Memory: 32 GB DDR5-5600 MHz RAM | Storage: 1TB PCIe Gen4 NVMe TLC M.2 SSD Display : 16.1 (40.9cm)diagonal, FHD (1920 x 1080), 165 Hz, 7 ms response time, IPS, micro-edge, anti-glare, Low Blue Light, 300 nits, 100% sRGB",
   title:"HP OMEN Gaming Laptop, AMD Ryzen™ 7 7840HS,16.1inch(40.9cm),FHD,Anti-Glare,32GB RAM DDR5,1TB SSD,8GB RTX 4060 GPU,Windows 11,MSO21,Shadow Black,2.37kg,16-xd0017AX",
   img:"laptop/lap6.jpg",                                                           
   mrp:125990,
   rmrp:184269,
   offer:14,   
  }
  ,{
    name: " Dell Alienware Gaming Laptop",
    id:"l7",
   disc:"Features- Powerful performance with the latest in CPU(13G HX-series)/GPU (RTX 40-series) technology: Uncompromised gaming experience with Link larger screen, full-sized CherryMX keyboard",
   img:"laptop/jap7.jpg",
   title:" Dell Alienware m18 R1 Gaming Laptop,Intel Core i9- 13900HX/32GB/1TB SSD/NVIDIA RTX 4080 12GB GDDR6/18.0 (45.72cm) QHD 165Hz/Win 11+MSO'21/15 Month McAfee/Backlit KB per-Key AlienFX/Dark Metallic Moon",
   mrp:343019,
   rmrp:469654,
   offer:27,   
  },{
    name:"Lenovo IdeaPad ",
    id:"l8",
   disc:"AI Enabled Processor: Intel Evo Core Ultra 9 185H | 16C (6P + 8E + 2LPE) / 22T, Max Turbo up to 5.1Ghz | 16 Cores | 22 Threads | Cache: 24MBMemory and Storage: 32GB RAM LPDDR5x-7467 | 1 TB SSD (Expandable upto 2TB) || Graphics: Integrated Intel Arc Graphics",
   img:"laptop/lap8.webp",
   title:"Lenovo IdeaPad Pro 5 Intel Evo Core Ultra 9 185H Built-in AI 14 (35.56cm) 2.8K-OLED 400Nits 120Hz Laptop (32GB/1TB SSD/Win11/MSO 21/FHD+IR Camera/1Yr ADP Free/3 Mon Game Pass/Grey/1.4Kg), 83D2001GIN",
   mrp:107990,
   rmrp:146090,
   offer:27,   
   },
  // {

  //  disc:"t",
  //  img:"laptop/lap1.jpg",
  //  mrp:1,
  //  title:"",
  //  rmrp:0,
  //  offer:5,   
  // },
]
export default Card_L
