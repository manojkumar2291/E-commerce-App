import React, { useState,useEffect } from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import new_collections from '../assets/new_collections'

const NewCollections = () => {
  const [newcollection,setnewcollection]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setnewcollection(data))
    
},[])
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
            {new_collections.map((item,i)=>{
                return (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
            })}
        </div>
    </div>
  )
}

export default NewCollections