"use client"
import { gallery } from '@/app/data/data'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SlideShowIndicator from '@/app/components/slideshowindicator/slideshowindicator';

export default function Gallery() {
  const [currentIndex,setCurrentIndex] = useState(0);
  const currentindex = useRef(0);

  
  useEffect(function(){
      const timer = setInterval(function(){
        setCurrentIndex(index=>index + 1);
        currentindex.current += 1;
        if(currentindex.current >= (gallery.length)){
          setCurrentIndex(0);
          currentindex.current = 0;
        }
      },3000);
      return function(){
        clearInterval(timer)
      }
  },[]);

  return (
    <section className="w-full pt-16">
        <h2 className="text-[25px] md:text-[30px] lg:text-[35px] mb-10 font-bold text-slate-700 text-center">Meet the EssWorldPoint Crew Manning team: A Gallery of Our CM Experts</h2>
        <div className='relative max-w-[30rem] mx-auto overflow-hidden'>
          <div className='h-[85vh] w-full'>
              {
                 gallery.map(({url,alt,id},index)=>{
                    return(
                        <div className={`h-full w-full absolute  ${(index === currentIndex) ? 'visible ':'invisible'}`}>
                          <Image src={url} key={id} loading="lazy" className={`h-full rounded-[10px]  ${(index === currentIndex) ? 'visible opacity-100 ':'opacity-0 invisible'} object-cover max-w-full w-full duration-1000 ease-out`}  width={600} height={800} alt={alt}/>
                          {alt != "" && <div className='text-white pb-4 pt-8 px-6 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent)] absolute bottom-0 right-0 left-0'>{alt}</div>}
                        </div>
                    )
                 })
              }
          </div>
        </div>
        <div className='flex gap-x-4 justify-center py-5'>
           {
              gallery.map(({id},index)=>{
                if(index === currentIndex){
                  return <SlideShowIndicator key={id} className="bg-gray-800 duration-1000" />
                }
                return <SlideShowIndicator key={id} />
              })
           }
          </div>
    </section>
  )
}
