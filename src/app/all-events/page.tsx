'use client'
import React from "react";
import { CldImage } from "next-cloudinary";

interface cloudinaryResource {
  width: number;
  height: number;
  secure_url: string;
  public_id: string;
}
const page = async () => {
  // Replace with your Cloudinary API endpoint
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`).toString("base64")}`,
      },
    }
  );
  if (!res.ok) {
    console.error("Failed to fetch Cloudinary resources");
    return <div>Error loading resources</div>;
  }
  const data = await res.json();
  const { resources } = data;
  return (
    <div>
      <h1 className="text-6xl text-cyan-500">ALL EVENTS !!</h1>
      <div className="photo flex gap 5 justify-between flex-wrap w-full p-6 border">
        {resources.map((resource: cloudinaryResource) => (
          <CldImage
            key={resource.public_id}
            src={`${resource.public_id}`}
            height={resource.height}
            width={resource.width}
            alt="hello"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
