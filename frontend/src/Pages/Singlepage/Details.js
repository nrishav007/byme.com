import React from 'react'
import { useEffect, useState, useRef } from 'react';
import "./Deatil.css"

import Bread from './Bread';

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
      images:[
        {
          src: "https://i.ibb.co/n10gPsZ/71f-Dx-CFXJXL-SX569-SX-UX-SY-UY.jpg",
        },
        {
          src:"https://i.ibb.co/6BBvXfc/61-Gf-D31-Ro8-L-SX569-SX-UX-SY-UY.jpg",
        },
        {
          src: "https://i.ibb.co/DCgJQTK/81uf-VXh9x-TL-SX569-SX-UX-SY-UY.jpg",
        }
         ,
         {
          src: 
          "https://i.ibb.co/5163SrQ/71-F-FZ939i-L-SX569-SX-UX-SY-UY.jpg",
         },
         {
          src: "https://i.ibb.co/HgRWfj7/714-QSOg-O7-ZL-SX569-SX-UX-SY-UY.jpg",
         },
         {
          src: "https://i.ibb.co/sFmzN2j/61-CF-f-F-1q-L-SX569-SX-UX-SY-UY.jpg",
         }
         ,{
          src: "https://i.ibb.co/2c6v0bz/71p-NSl-Ga-Og-L-SX569-SX-UX-SY-UY.jpg",
         },
         {
          src: "https://i.ibb.co/YtvKTJD/71q-RUolt9-ML-SY741-SX-UX-SY-UY.jpg",
         },
         {
          src:"https://i.ibb.co/9rrcMsk/71-J4-QFJYd-L-SX569-SX-UX-SY-UY.jpg",
         },
         {
          src:"https://i.ibb.co/QFT52k3/71zm-Gl-IGv-EL-SX569-SX-UX-SY-UY.jpg",
         }
      
      ]
  }


const Details = () => {
  const [slideindex ,setslideindex] = useState(1)
  const [width ,setwidth] = useState(0)
  const [start ,setStart] = useState(0)
  const [change ,setChange] = useState(9)


  const slideRef = useRef()

   useEffect(()=>{
     if(!slideRef.current) return;
     const scrollWidth = slideRef.current.scrollWidth 
     const childrenElementCount = slideRef.current.childElementCount;
     const width = scrollWidth/childrenElementCount
     setwidth(width)

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



  return (
     <React.Fragment>
  
     <section className='product-details'>
       <div className='product-page-img'>
          {
            
            product.images.map((image,index)=>(
               <div key={index} className="myslides"
               style={{display:(index+1)===slideindex ? "block":"none"}}
               >
                <div className='numbertext'>
                      {index+1} /{product.images.length}
                      <img src={image.src} alt="" />
                </div>
              </div>  
          ))
             
          }

          <a href='#' className='prev' onClick={()=>plusSlides(-1)}>&#10094;</a>
          <a href='#' className='next' onClick={()=>plusSlides(1)}>&#10095;</a>
          <div className='slider-img' draggable={true} ref={slideRef}
          onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}
          >
              {
               product.images.map((image,i)=>(
                  <div key={i} className={`slider-box ${i+1===slideindex && "active"}`}
                  onClick={()=> setslideindex(i+1) }
                  >
                      <img src={image.src} />
                  </div>
               )) 
              }
          </div>

       </div>
       <div className='product-page-detail'>
         <strong>{product.name}</strong>
         <p className='product-category'>
            {product.brand}
         </p>
          <p className='product-price'>
      ${Math.round(product.price)}
          </p>
      <p className='small-desc'>
      Black coat from Saint Laurent. Crafted from velvet fabric, this style features a waist-cinching cord belt with fringes, faux-fur trimming on the collar, two slip pockets, long sleeves, a single back vent and a silk lining. Color: black
      </p>
      
       <div className='product-color'>
           {/* <button style={{background:color}}>1</button>      */}
           {/* <button>2</button>         */}
       </div>
{/* ---------------------- */}
       <div className='product-page-offers'>
        <i  className='fa-solid fa-tag' />
        {product.discount}%Discount
       </div>

       <div className='cart-btns'>
           <a href='#' className='add-to-cart'>Add To Cart</a>
           <a href='#' className='add-to-cart buy-now'>Buy Now</a>
       </div>

  {/* ====== */}

       </div>

     </section>
     <section className='product-info'>
   
     <ul className='product-info-menu'> 
          <li className='p-info-list'>
            <li>Product Details</li>
            <li>Product Details</li>
            <li>Product Details</li>
            <li>Product Details</li>
          </li>
     </ul>
        <div className='info-container'>

        </div>
     </section>

     </React.Fragment>
   
  )
}

export default Details