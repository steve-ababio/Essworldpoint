
import Image from 'next/image'
import React from 'react'

type GalleryCardProp = {
    url:string
    alt:string
}
export default function Gallerycard({url,alt}:GalleryCardProp) {
  return (
    <div className="h-[500px] shadow-md w-full overflow-hidden  
        before:content-[''] before:block before:w-full before:h-full 
        before:absolute relative before:bg-black/30 before:inset-0
         before:pointer-events-none">
        <Image src={url} loading="lazy"
          className="h-full object-cover max-w-full w-full lg:hover:scale-[1.05] duration-200" width={600} height={800} alt={alt} />
    </div>
  )
}
