import React, { useState } from 'react';
import '../css/imageuploader.css';

export default function ImageUploader({ onChange }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      onChange(file); // ✅ Pass the File object to parent
      
      const reader = new FileReader();
      reader.onload = function (e) {
        setImagePreview(e.target.result); // ✅ Preview the image
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
        <img src={imagePreview} alt="Image Preview" style={{ width: '150px', marginTop: '10px' }} />
      )}
    </div>
  );
}
