import React from 'react'
import { frameVid, intelligence } from '../utils'
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { animateWithGsap } from '../utils/animation';

const AppleIntelli = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  },[])


  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id='chip' className='flex-center w-full'>
          <img src={intelligence} alt="chip" w={600} h={600} />
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='ai-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
            AI-opening possibilities.
          </h2>
        </div>

        <div className='mt-10 md:mt-20 mb-14'>
          <div className='flex justify-center'>
            <video 
              className='pointer-events-none max-w-full h-auto'
              playsInline
              preload='none'
              muted
              autoPlay
              ref={videoRef}
            >
              <source src={frameVid}/>
            </video>
          </div>
        </div>

        <div className='ai-text-cont'>
          <div className='flex flex-1 justify-center flex-col items-center '>
            <p className='ai-text g_fadeIn text-center text-gray-400 custom-font-size'>
              iPhone 16 Pro is built for Apple Intelligence, the personal
              intelligence
              <br /> system that helps you{' '}
              <span className="text-white font-bold">
                 write, express yourself and get things done
                <br /> effortlessly
              </span>
              . With groundbreaking privacy protections, it gives you <br />
              peace of mind that no one else can access your data — not even
              Apple.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AppleIntelli
