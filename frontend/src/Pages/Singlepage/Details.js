import React from 'react'
import { useEffect, useState, useRef } from 'react';
import "./Deatil.css"
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';
import { getsinglepage } from './../../Fetch/Fetch';
import { useToast } from "@chakra-ui/react";
import {AddToCartData} from "./../../Fetch/Fetch"

const product = {
    
      id: 1,
      name: "Symbol Men Casual Shirt",
      brand:"flip",
      quantity: 1,
       discount:5,
      defaultImage:
        "https://i.ibb.co/X5fn1v7/71f-Dx-CFXJXL-SX569-SX-UX-SY-UY.jpg",
      hoverImage:
        "https://i.ibb.co/sFmzN2j/61-CF-f-F-1q-L-SX569-SX-UX-SY-UY.jpg",
      price: 529,
      strikePrice: 1390,
      rating: 4,
      size:"M, S, L, X, XL, XXL",
      infos: [
        {
        title:"Product Detail",
        content:"Decorated with an all-over floral motif, this black short-sleeved Saint Laurent shirt is Italian-crafted and features a structured, yet fluid silhouette. 100% viscose.",
        },
        {
          title:  "All Shipping ", 
          content: "Free Shiping with Mythresa Valid jan 2023", 
        },
        {
          title: "Size & Fit Issues", 
          content: "True to size Without pleats in the back Straight fit  Lightweight material Falls to the hip The model in the picture is 185cm-6'1 and wearing a size EU 39" 
        },
      {
        title:"Style Details",
        content: "Decorated with an all-over floral motif, this black short-sleeved Saint Laurent shirt is Italian-crafted and features a structured, yet fluid silhouette.", 
          
      } ,
    ] ,


      images: "https://i.ibb.co/n10gPsZ/71f-Dx-CFXJXL-SX569-SX-UX-SY-UY.jpg",
        
      
  }


const Details = () => {
  const [slideindex ,setslideindex] = useState(1)
  const [width ,setwidth] = useState(0)
  const [start ,setStart] = useState(0)
  const [change ,setChange] = useState(9)
  const [data, setData] = useState([])
  const params = useParams()
  const [ infotitle , setinfotitle] = useState(product.infos[0].title)
  const slideRef = useRef()
  const Toast = useToast( );
 
    const getData = () =>{
       getsinglepage(params.id).then((res)=>{
         setData(res.data)
       })
       .catch((err)=>{
        console.log(err)
       })
    }
//  console.log(data)

   useEffect(()=>{
     getData()
   },[params.id])
  // console.log(data,'from state')

   useEffect(()=>{
     if(!slideRef.current) return;
     const scrollWidth = slideRef.current.scrollWidth 
     const childrenElementCount = slideRef.current.childElementCount;
     const width = scrollWidth/childrenElementCount
     setwidth(width)
      // console.log({scrollWidth,childrenElementCount,width}) 
   },[])

   useEffect(() =>{
     if(!slideRef.current|| width) return;
     let numofthumb = Math.round(slideRef.current.offsetWidth /width);
    //  console.log(numofthumb)
    slideRef.current.scrollLeft=slideRef>numofthumb ? (slideindex-1)*width:0

   },[width,slideindex])



  function plusSlides (n){
    setslideindex(prev=>prev+n)
    slideshow(slideindex+n);
  }

  function slideshow(n){
       if(n>product.images.length){
        setslideindex(1)
       }
       if(n<1){
        setslideindex(product.images.length)
       }
  }

  // 
   function dragStart(e){
  setStart(e.clientX)
   }
   
   function dragOver(e){
    let touch = e.clientX;
    setChange(start-touch);
   }
   
   function dragEnd(e){
     if (change>0){
      slideRef.current.scrollLeft+=width
     }else{
      slideRef.current.scrollLeft-=width
     }
   }


   const handleAddToCart = (image,title,description,price,category,type,userID) =>{
    const payload = {
        image,
        title,
        description,
        price,
        category,
        type,
        productID : userID
    };
    return AddToCartData(payload).then((res)=>{
        Toast({position : "top", title : `${res.data.msg}`, status : "success", duration : 3000});   
    })
    .catch((err)=> console.log(err))
}   
   
  

  return (
     <React.Fragment>
       <Navbar/>

      <div className='bigbox'>

      {
      
      data.length > 0 && data.map((elem)=>{

         return <section className='product-details'>
 
 <div className='product-page-img'>   
    <div className='product-image'>
      <img src={elem.image}/>
     </div>               
     
  </div>

  <div className='product-page-detail'>
    <strong>{elem.description}</strong>
    <p className='product-category'>
       {elem.category}
    </p>
     <p className='product-price'>
       {elem.price}
     </p>
 <p className='small-desc'>
 Black coat from Saint Laurent. Crafted from velvet fabric, this style features a waist-cinching cord belt with fringes, faux-fur trimming on the collar, two slip pockets, long sleeves, a single back vent and a silk lining
 </p>
 
  <div className='product-options'>
   
       <div  className='size'>
        <h1>  Size : -   M   S   L   X  XL  XXL  </h1>
       </div>
     
        
  </div>
{/* ---------------------- */}
  <div className='product-page-offers'>
   <i  className='fa-solid fa-tag' />
   {product.discount}%Discount
  </div>

  <div className='cart-btns'>
      <Link>
      <button className='add-to-cart' onClick={( ) =>handleAddToCart(elem.image,elem.title,elem.description,elem.price,elem.category,elem.type,elem.userID)}>Add To Cart</button>
      </Link>
  </div>

{/* ====== */}

  </div>

</section>

         })
         
      }

    



     <section className='product-info'>
       <ul className='product-info-menu'>
          {
            product.infos.map(info =>(
               <li onClick={() => setinfotitle(info.title) } 
  className={`p-info-list ${info.title===infotitle ? "active": "" }` }>
                {info.title}
                </li>
            ))
          }
       </ul>
       {
            product.infos.map(info =>(
              <div key={info.title}
        className={`info-container ${info.title===infotitle ? "active" : "" }`}>
                  {info.content}
              </div> 
            ))
      }
      
     </section>

     </div>

     </React.Fragment>
   
  )
}

export default Details

