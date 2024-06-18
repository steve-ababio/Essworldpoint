
import Image from 'next/image'
import React from 'react'

type GalleryCardProp = {
    url:string
    alt:string
}
export default function Gallerycard({url,alt}:GalleryCardProp) {
  return (
    <div className="h-[500px] shadow-md">
        <Image src={url} className="h-full object-cover  rounded-[8px]" width={600} height={800} alt={alt} />
    </div>
  )
}
