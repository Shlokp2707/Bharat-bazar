import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react'


const Heart = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    <div>
     <FontAwesomeIcon
      icon={faHeart}
      onClick={handleClick}
      className={`w-6 h-6 cursor-pointer ${isClicked ? 'text-red-500' : 'text-gray-500'}`} />        
    </div>
  )
}

export default Heart
