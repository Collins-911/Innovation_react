import React, { useState } from 'react';
import '../css/imageuploader.css';





 export default function ImageUploader() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="uploader">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      {imagePreview && (
        <img src={imagePreview} alt="Image Preview"/>
      )}
    </div>
  );
}
