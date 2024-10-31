'use client'
import { CldImage } from "next-cloudinary";
import React from "react";
interface CloudinaryResource {
  width: number;
  height: number;
  secure_url: string;
  public_id: string;
}

interface ImageCompProps {
  resource: CloudinaryResource;
}
const ImageComp = ( {resource} :ImageCompProps) => {
  return (
    <div>
      <CldImage
        key={resource.public_id}
        src={`${resource.public_id}`}
        height={resource.height}
        width={resource.width}
        alt={resource.public_id}
        sizes="(min-width:786px) 33vw, (min-width:1024px) 25vw,(min-width:1280px) 20vw, 50vw"
      />
    </div>
  );
};

export default ImageComp;
