import React from "react";
import ImageComp from "./ImageComp";
import UploadBtn from "./UploadBtn";

interface cloudinaryResource {
  width: number;
  height: number;
  secure_url: string;
  public_id: string;
}
const page = async () => {
  const folderName = "eventmanger"
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=${folderName}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString("base64")}`,
      },
    }
  );
  
  if (!res.ok) {
    console.error("Failed to fetch Cloudinary resources");
    return <div>Error loading resources</div>;
  }

  const data = await res.json();
  const { resources } = data;
  console.log("Data",data);

  return (
    <div>
      <h1 className="text-6xl text-cyan-500">ALL EVENTS !!</h1>
      <UploadBtn />
      <div className="photo flex gap-5 justify-between flex-wrap w-full p-6 border">
        {resources.map((resource: cloudinaryResource) => (
          <ImageComp key={resource.public_id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default page;