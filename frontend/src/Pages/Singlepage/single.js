import React from 'react'
import Footer from '../../Components/Footer'
import { Helpbot } from '../Helpbot/Helpbot'
import Details from './Details'
import "./Sin.css"

export const Single = () => {
  return (
    <div className='container'>
 
     <Details/>
     <Helpbot/>
     <Footer/>
    </div>
  )
}

