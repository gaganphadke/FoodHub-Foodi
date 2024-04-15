import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';

const Card = ({item}) => {

  const [isheart,setheart]=useState(false);

  const handle=()=>{
    setheart(!isheart)
  }
  return (
      <div to={`/meny/${item._id}`} className="card w-75 bg-base-100 shadow-xl relative mr-5 md:my-5">
        <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isheart ? "text-rose-500" : "text-white"}`}
        onClick={handle}
        >
          <FaHeart className='h-5 w-5 cursor-pointer'/>
        </div>
        <Link to={`/menu/${item._id}`}>
        <figure><img src={item.image} alt="" className='hover:scale-105 transition-all duration-200 md:h-72'/></figure>
        </Link>
  
  <div className="card-body">
  <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
    <p>{item.recipe}</p>
    <div className="card-actions justify-between items-center mt-2">
      <h5 className='font-semibold'><span className='text-sm text-red'>$</span> {item.price} </h5>
      <button className="btn bg-green text-white">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card