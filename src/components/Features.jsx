import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expVid } from '../utils';
import { useRef, useEffect, useState } from 'react';
import ImageCarousel from "./Slider";

const Features = () => {

 const videoRef = useRef(null);
 const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => {
          if (!hasPlayed) {
            videoRef.current.play();
            setHasPlayed(true);
          }
        },
        onLeave: () => videoRef.current.pause(),
      },
    });

    gsap.fromTo(
      "#features_title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: "#features_title",
      }
    );
    gsap.fromTo(
      ".g_text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: ".g_text",
      }
    );
  }, [hasPlayed]);




  return (
    <section className='relatie bg-transparent min-h-screen overflow-hidden'>
      <div className='relative z-30 text-center pt-20'>
        <h1 id='features_title' className='text-5xl md:text-6xl font-bold text-gray-100 mb-0 opacity-0'>
          Strength. Beauty.
        </h1>
        <h1 className="text-6xl g_text font-bold text-white [text-shadow:_0_0_8px_rgba(255,255,255,0.8),_0_0_16px_rgba(255,255,255,0.6),_0_0_24px_rgba(255,165,0,0.5)]">
          Titanium.
        </h1>
      </div>

      <div className='video_cont mt-24'>
        <video playsInline
          id="exploreVideo"
          className="opacity-100"
          preload="none"
          muted
          autoPlay
          ref={videoRef}>
          <source src={expVid} alt='video' type='video/mp4'/>
        </video>
      </div>

      <div className='relative z-30 bottom-0 left-0 right-0 p-8 mt-12 gradient-bg'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-start gap-6 mt-24 md:mt-48'>
          <div className='flex-1 p-6 rounded-lg w-full md:w-auto'>
            <p className="feature-text g_text text-gray-400 custom-font-size leading-relaxed">
              iPhone 16 Pro features a
              <br />
              Grade5 titanium design with
              <br />
              a new, refined micro-blasted
              <br />
              texture. Titanium has one of
              <br />
              the highest strength-to-
              <br />
              weight ratios of any metal,
              <br />
              making these models{' '}
              <span className="text-white font-bold">incredibly strong and
                <br />
                impressively light</span>.
              <br />
              iPhone 16 Pro comes in four
              <br />
              stunning finishes — including
              <br />
              new Desert Titanium.
            </p>
          </div>

          <div className="flex-1 p-6 rounded-lg w-full md:w-auto md:mb-24">
          <p className="feature-text g_text text-gray-400 custom-font-size leading-relaxed">
              Internal design improvements
              <br />
              — including a 100% recycled
              <br />
              aluminum thermal
              <br />
              substructure and back glass
              <br />
              optimisations that further
              <br />
              dissipate heat enable up to
              <br />
              20% {" "}
              <span className="text-white font-bold">
                better sustained
                <br />
                performance
              </span>{" "}
              than iPhone 15
              <br />
              Pro. So you can do all the
              <br />
              things you love — like high-
              <br />
              intensity gaming — for longer.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <ImageCarousel />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-start gap-6 mt-24 md:mt-48">
          <div className="flex-1 p-6 rounded-lg w-full md:w-auto">
            <p className="feature-text g_text text-gray-400 custom-font-size leading-relaxed">
              New display technology allows us
              <br />
              to route display data under active
              <br />
              pixels with no distortion, resulting
              <br />
              in thinner borders for larger
              <br />
              15.93 cm (6.3”) and 17.43 cm
              <br />
              (6.9”){" "}
              <span className="text-white font-medium">
                Super Retina XDR displays
              </span>{" "}
              <br />
              that feel great in the hand.
            </p>
          </div>

          <div className="flex-1 p-6 rounded-lg w-full md:w-auto md:mb-24">
            <p className="feature-text g_text text-gray-400 custom-font-size leading-relaxed">
              iPhone 16 Pro is splash, water and
              <br />
              dust resistant. It also has our
              <br />
              latest-generation Ceramic Shield
              <br />
              material that's{" "}
              <span className="text-white font-medium">
                two times tougher
                <br />
                than any smartphone glass.
              </span>{" "}
              Talk
              <br />
              about durable.
            </p>
          </div>
        
        </div>
      </div>

      <style jsx='true'>{`
        .gradient-bg {
          background-image: radial-gradient(
            ellipse 80% 50% at center,
            rgba(255, 200, 150, 0.2) 0%,
            rgba(60, 44, 38, 0.4) 25%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.7) 80%,
            rgba(0, 0, 0, 1) 100%
          );
          border-radius: 10px;
        }

        .glow-effect {
          color: #fffaf6;
          text-shadow: 0 0 10px #ebdcd2, 0 0 20px #ae8569,
            0 0 40px #8f6245, 0 0 40px #8f6245, 0 0 40px #8f6245, 0 0 40px #5b351c, 0 0 40px #5b351c, 0 0 80px #5b351c;
        }

        .blend-text {
          mix-blend-mode: screen;
          position: relative;
          z-index: 30;
        }

        #features_title {
          margin-bottom: 10px;
          position: relative;
          z-index: 30;
        }

        .mb-24 {
          margin-bottom: 120px;
        }

        .custom-font-size {
          font-size: 1.325rem;
        }
      `}</style>
    </section>
  )
}

export default Features
