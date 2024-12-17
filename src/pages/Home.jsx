import React, { useState } from 'react'


import Offer_slider from '../Component/Offer_slider'
import Card_m from '../Component/Card_m'
import Card_w from '../Component/Card_w'
import Card_L from '../Component/Card_L'
import Nav from '../Component/Header/Nav'
import Cardb from '../Component/Cardb'
const Home = () => {
//   const [counter,setCounter]=useState(0)
// setCounter(counter+1)
// alert(counter)
//   const counterIncrease=()=>{
//     setCounter(counter+1)
// }

  return (
    <>
    <Offer_slider></Offer_slider>
    <div className='flex flex-row flex-wrap justify-center m-14 mt-5 '>
      <Cardb></Cardb>
     <Card_m></Card_m>
     <Card_L></Card_L>
     <Card_w></Card_w>
    </div>
    </>
  )
}
 
export default Home
