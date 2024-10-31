"use client";
import { CldUploadButton } from "next-cloudinary";
import React from "react";

const UploadBtn = () => {
  const handleUpload = (result: any) => {
    console.log('Upload result:', result);
    console.log('Public ID:', result.info.public_id);
    console.log('URL:', result.info.secure_url);
  };

  return (
    <div>
      <CldUploadButton
        signatureEndpoint={"/api/sign-cloudinary-params"}
        options={{
          autoMinimize: true,
          folder: "eventmanger", 
        }}
        onSuccess={handleUpload}
      />
    </div>
  );
};

export default UploadBtn;
