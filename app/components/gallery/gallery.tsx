import { gallery } from '@/app/data/data'
import React from 'react'
import Gallerycard from '../gallerycard/gallerycard'

export default function Gallery() {
  return (
    <section>
        <h2 className="text-[2rem] mb-12 mt-20 font-bold text-slate-700 text-center">Meet the EssWorldPoint Crew Manning team: A Gallery of Our CM Experts</h2>
        
        <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] px-5 gap-4'>
            {
                gallery.map(({url,alt,id})=>(<Gallerycard key={id} url={url} alt={alt}/>))
            }
        </div>
    </section>
  )
}
