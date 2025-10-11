import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets'

const BestSeller = () => {

    const {Products}=useContext(ShopContext)
    const [bestSeller,setBestSeller]=useState([])

    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller))
    },[])


  return (
    <div>


    </div>
  )
}

export default BestSeller