
import React from 'react'
import Button from '../Component/Button'
import { Link, useNavigate } from 'react-router-dom'
const Congrats = () => {
  const navigate = useNavigate()


  return (
<>
 <div className='w-screen h-screen flex justify-center  flex-col items-center bg-white'>
{/*    
            <h1 className='text-3xl font-bold  m-10'>congratulations </h1>
            <h2  className='text-3xl font-bold  m-10'>Your Order Will Be Delivered As Soon As Possible </h2> */}
<img src="congrats.png" alt='' className='w-full h-full relative ' />
<h2 className="absolute text-2xl bg-white font-extrabold bottom-[18%]">Your Order Will Be Delivered As Soon As Possible </h2>
        
        <Link to='#'  onClick={()=>navigate(-1)} className='absolute bottom-1/4 left-1/4 w-40 h-32 '>
<Button className='to-blue-400' >Go back</Button>      
</Link>
</div>

</>  
)
}
export default Congrats
