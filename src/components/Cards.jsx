import React from 'react'
import { useState } from "react";
import {
  apple_privacy,
  card1Img1,
  card2Img1,
  card3Img1,
  img2card1,
  img2card2,
  img2card3,
  img3card1,
  img3card2,
  img3card3,
} from "../utils";

const Cards = () => {
  const [selected, setSelected] = useState(0);

  const Items = [
    {
      cardHeading1: "Boost your productivity",
      cardHeading2:
        "Explore new tools that help you write, focus and communicate.",
      card1: {
        img: card1Img1,
        text: "",
        StrongText: "Writing Tools",
        text2:
          " can proofread your text and rewrite different versions until the tone and wording are just right, and summarise selected text with a tap. They're available nearly everywhere you write, including third-party apps.",
      },
      card2: {
        img: img2card1,
        text: "Just hit record in the Notes or Phone app to capture audio recordings and transcripts. Apple Intelligence generates",
        StrongText: "summaries",
        text2:
          "of your transcripts, so you can get the most important info at a glance.",
      },
      card3: {
        img: img3card1,
        text: "",
        StrongText: "Priority messages in Mail ",
        text2:
          "elevate time-sensitive messages to the top of your inbox — like an invitation that has a deadline today or a check-in reminder for your flight this afternoon.",
      },
    },
    {
      cardHeading1: "Express yourself visually",
      cardHeading2:
        "Create fun, original images that are truly personal to you.",
      card1: {
        img: card2Img1,
        text: "Make a",
        StrongText: "Genmoji",
        text2:
          " right in the keyboard to match any conversation. Want to create a disco ball pigeon? You got it. Just provide a description.",
      },
      card2: {
        img: img2card2,
        text: "The ",
        StrongText: "Image Playground app",
        text2:
          "lets you create unique images in seconds based on a description, a concept or even a person from your Photos library. Experiment with image styles like animation, illustration and sketch.",
      },
      card3: {
        img: img3card2,
        text: "With",
        StrongText: "Clean Up, ",
        text2:
          " you can remove distracting background objects from your photos with just a tap — so you can perfect a shot while staying true to the original image.",
      },
    },
    {
      cardHeading1: "A new era for Siri",
      cardHeading2:
        "With all-new superpowers, Siri will be able to assist you like never before.",
      card1: {
        img: card3Img1,
        text: "Awareness of your personal context enables Siri to",
        StrongText: "help you in ways that are unique to you.",
        text2:
          " Need your passport number while booking a flight? Siri can help find what you're looking for, without compromising your privacy.",
      },
      card2: {
        img: img2card3,
        text: "",
        StrongText: "Richer language understanding",
        text2:
          "and an enhanced voice make communicating with Siri even more natural. For example, if you stumble over your words, Siri still knows what you're getting at.",
      },
      card3: {
        img: img3card3,
        text: "Not sure how to do something on iPhone, like adjust the background blur on a portrait? With expansive product knowledge, Siri can give you",
        StrongText: "step-by-step instructions",
        text2: " in a snap.",
      },
    },
  ];


  return (
    <section className='w-full flex flex-col justify-center text-center items-center lg:px-32 bg-gradient-to-t  from-[#1c1b1b] via-[#222121] to-[#00000055]'> 
      <div className="hidden min-[1075px]:flex  justify-center w-[80%] xl:w-3/5">
        <ul className="text-lg flex gap-6 text-[#86868b] h-9 w-full font-semibold ">
          <li
            className={` border-b border-[#424245] w-full  hover:text-white flex justify-center ${
              selected === 0 && "text-white border-b-white"
            }   `}
            onClick={(e) => setSelected(0)}
          >
            <div>Boost your productivity</div>
          </li>
          <li
            className={`  border-b border-[#424245] w-full  hover:text-white flex justify-center ${
              selected === 1 && "text-white border-b-white  "
            }  `}
            onClick={(e) => setSelected(1)}
          >
            <div>Express yourself visually</div>
          </li>
          <li
            className={` border-b border-[#424245] w-full  hover:text-white flex justify-center ${
              selected === 2 && "text-white border-b-white "
            }  `}
            onClick={(e) => setSelected(2)}
          >
            <div>A new era for Siri</div>
          </li>
        </ul>
      </div>


      {Items &&
        Items.map((item, i) => (
          <div
            key={i}
            className={`w-[87%]  h-[80%]  pt-10 items-center text-[14px]  duration-500 transition-opacity ease-in-out delay-0 lg:  ${
              i !== selected && "min-[1075px]:hidden"
            }`}
          >
            <div className="flex items-center flex-col font-semibold">
              <div className="min-[1075px]:hidden text-base sm:text-2xl text-white pt-5 mb-2  font-bold">
                {item.cardHeading1}
              </div>
              <p className="text-center w-full max-w-[36rem] px-4 text-xl mb-10 animate-fade break-words">
                {item.cardHeading2}
              </p>
            </div>
            <div className="flex flex-col min-[1075px]:flex-row gap-7 text-sm text-gray-200 ">
              <div className="flex flex-col justify-around items-center min-[1075px]:w-1/2 md:px-14 pt-7 py-5 bg-black rounded-3xl">
                <div className="w-80 animate-fade flex justify-center">
                  <img src={item.card1.img} alt="" />
                </div>
                <div className="text-center w-[73%]  animate-fade ">
                  {item.card1.text}{" "}
                  <span className="text-white font-bold">
                    {item.card1.StrongText}
                  </span>{" "}
                  {item.card1.text2}.
                </div>
              </div>
              <div className="min-[1075px]:w-1/2 flex flex-col gap-7">
                <div className="py-10 leading-5 bg-black flex flex-col gap-14  rounded-xl text-gray-200">
                  <div className="text-center px-4 sm:px-12 md:px-28 min-[1075px]:px-24 animate-fade">
                    {item.card2.text}{" "}
                    <strong className="text-white font-bold">
                      {item.card2.StrongText}
                    </strong>{" "}
                    {item.card2.text2}
                  </div>

                  <div className="overflow-hidden w-full flex justify-center animate-fade ">
                    <img src={item.card2.img} alt="" className="rounded-xl " />
                  </div>
                </div>
                <div className="bg-black w-full h-full  rounded-xl overflow-hidden">
                  <p className="text-center px-4 sm:px-[10%] md:px-[22%] py-14 animate-fade">
                    {item.card3.text}{" "}
                    <strong className="text-white">
                      {item.card3.StrongText}
                    </strong>{" "}
                    {item.card3.text2}
                  </p>
                  <div className="overflow-hidden flex justify-center -mb-64 min-[1075px]:-mb-52 animate-fade ">
                    <img src={item.card3.img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='common-padding'>
          <div className='screen-max-width'>
            <div id='privacy' className='flex-center w-full'>
                      <img src={apple_privacy} alt="privacy" w={600} h={600} />
            </div>
            <p className='text-5xl font-semibold pt-10'>Great power come
              <br />with great privacy.
            </p>


            <div className='relative z-30 bottom-0 left-0 right-0 p-8 '>
             <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mt-10 md:mt-5'>
              <div className='flex-1 p-6 rounded-lg w-full md:w-auto'>
                <p className='text-gray-400 leading-relaxed text-left'>
                Apple Intelligence is designed to <strong className='text-white'>protect 
                <br />your privacy at every step.</strong> It’s integrated
                <br />into the core of iPhone through on-device 
                <br />processing. So it’s aware of your personal 
                <br />information without collecting your personal information.
                </p>
              </div>

              <div className='flex-1 p-6 rounded-lg w-full md:w-auto'>
                <p className='text-gray-400 leading-relaxed text-left'>
                And with <strong className='text-white'>groundbreaking Private Cloud
                <br />Compute</strong> , Apple Intelligence can draw on
                <br />larger Apple-designed server-based models,
                <br />running on Apple silicon, to handle more 
                <br />complex requests for you while protecting
                <br />your privacy.

                </p>

              </div>
              </div>
             </div>


          </div>
          <a href="/" className="text-blue ml-2 hover:underline">
              Learn more about Apple Intelligence &gt;
              </a>
        </div>
    </section>
  )
}

export default Cards
