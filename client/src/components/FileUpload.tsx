import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0); // Track progress
  const [isUploading, setIsUploading] = useState<boolean>(false); // Track uploading state
  const [isUploadComplete, setIsUploadComplete] = useState<boolean>(false); // Track if the upload is complete

  // Handle file selection and preview generation
  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  };

  const { setNodeRef, isOver } = useDroppable({
    id: 'dropzone',
  });

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileSelect(event.dataTransfer.files[0]);
      setIsDragging(false);
      setIsDropped(true);

      // Trigger drop animation and reset state after a short delay
      setTimeout(() => {
        setIsDropped(false);
      }, 500);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return;

    setIsUploading(true);
    setIsUploadComplete(false);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const uploadUrl = 'https://your-api-endpoint/upload'; // Replace with your API endpoint

      // Create a readable stream to track progress
      const stream = new ReadableStream({
        start(controller) {
          const reader = (file as File).stream().getReader(); // Ensure it's a File

          const push = () => {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }

              // Upload the chunk
              controller.enqueue(value);

              // Update progress based on how much has been uploaded
              const loaded = value.length;
              const total = file?.size || 1; // Fallback to 1 to avoid division by zero
              const progress = Math.round((loaded / total) * 100);

              setUploadProgress(progress);
              push();
            });
          };

          push();
        },
      });

      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        setIsUploading(false);
        setIsUploadComplete(true);
        alert('Upload successful!');
      } else {
        setIsUploading(false);
        alert('Upload failed');
      }
    } catch (error) {
      setIsUploading(false);
      // alert('Upload failed: ' + error.message);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-6 relative">
      <div
        onClick={() => document.getElementById('fileInput')?.click()}
        className="max-w-md mx-auto p-4 relative cursor-pointer"
      >
        {/* Dropzone Area */}

        <div
          ref={setNodeRef}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative px-10 py-32 border-2 border-dashed rounded-lg text-center transition-transform duration-300 z-10
            ${isDragging ? 'scale-105 bg-blue-100 border-blue-400' : 'border-gray-300'} 
            ${isDropped ? 'animate-pulse' : ''}
            hover:scale-105 hover:bg-blue-50`}
        >
          {/* File Input */}
          <div className="z-20 w-full h-full">
            <input
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileSelect(e.target.files[0]);
                }
              }}
              style={{ display: 'none' }}
              id="fileInput"
            />
            <h1 className="text-blue-600 cursor-pointer hover:text-blue-500">
              Change Image
            </h1>
          </div>

          {/* Image Preview with Black Overlay */}
          {preview && (
            <div className="z-[-10] absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-lg"></div>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-96 max-h-72 object-cover rounded-lg shadow-md z-0"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}

        {/* Upload Progress Bar */}
        {isUploading && (
          <div className="mt-4">
            <p className="text-center text-gray-700">Uploading...</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Upload Complete Message */}
        {isUploadComplete && (
          <div className="mt-4 text-center text-green-600">
            <p>Upload Complete!</p>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors"
      >
        {isUploading ? 'Uploading...' : 'Submit'}
      </button>
    </form>
  );
}
