import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { watch } from '../utils'
import Carousel from './Carousel'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0, duration: 1 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, delay: 0.3 });

  },[])


  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className="screen-max-width">
        <div className='mb-12 w-full flex items-end justify-between md:flex'>
          <h1 id='title' className='section-heading opacity-0 translate-y-8 transition-none'>Get the highlights.</h1>
          <p className='link opacity-0 translate-y-8 transition-none'>Watch the film <img src={watch} alt="watch" className='ml-2' /></p>

        </div>

        < Carousel/>
      </div>
    </section>
  )
}

export default Highlights
