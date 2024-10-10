import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isDropped, setIsDropped] = useState<boolean>(false);

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
    // Logic for submitting the file and description to the server
  };

  return (
    <div
      onClick={() => document.getElementById('fileInput')?.click()}
      className="max-w-md mx-auto p-4 relative cursor-pointer"
    >
      {/* Dropzone Area */}
      <form onSubmit={submit} className="space-y-6 relative">
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
      </form>
    </div>
  );
}
