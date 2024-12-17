import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header/Nav.css";
const Offer_slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:    500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover:true
  };
  return (        
     <>
        <Slider {...settings}> 
          
          { OfferApi.map(({img,id})=>
          <div key={id} className=' w-3/4  m-auto h-1/2'>
            <div className='mt-14 w-full h-1/2 flex justify-center'>
               <img src={img} className=' flex flex-row w-1/2 scale-x-150 text-white  rounded-lg h-1/4' alt="ugfhgdf" />
            </div>
          </div>       
)}
      </Slider>  
    </>
  )
}
const OfferApi =[
  {
    id:1,
      img:"https://static.vecteezy.com/system/resources/previews/011/644/608/original/diwali-discount-sale-banner-happy-diwali-online-shopping-banner-diwali-bumper-sale-free-vector.jpg",
  },  
  
    {
      id:3,
      img:"https://cdn.grabon.in/gograbon/images/web-images/uploads/1621489046640/hpshopping-discount-codes.jpg",
  },
  
  {
    id:4,
    img:"https://cdn.grabon.in/gograbon/images/web-images/uploads/1593768343013/mobile-offers.jpg",
},
{
  id:0,
    img:"https://thumbs.dreamstime.com/b/online-shopping-promotional-sale-banner-fast-shopping-cart-full-colorful-bags-gifts-boxes-online-shopping-promotional-sale-168812516.jpg",
},
 
]
export default Offer_slider


 