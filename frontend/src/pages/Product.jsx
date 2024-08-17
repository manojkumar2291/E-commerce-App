import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrumps/Breadcrum';
import Productdisplay from '../components/Productdisplay/Productdisplay';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productid}=useParams();
  const product=all_product.find((e)=>e.id===Number(productid))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
    </div>
  )
}

export default Product;