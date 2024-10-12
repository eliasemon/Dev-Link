import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { CiImageOn } from 'react-icons/ci';
import { getApiUrl } from '@/utils';
import { useStore } from '@/store/store';

export interface IImperativeFileUpload {
  onUpload: () => Promise<object>;
  setPreview: (preview: string) => void;
  preview: string | null;
}

interface FileUploadProps {
  signal: () => void; // Expecting an abort signal prop
}
const FileUpload = React.forwardRef<IImperativeFileUpload, FileUploadProps>(
  ({ signal }, ref) => {
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
    useEffect(() => {
      if (file) signal();
    }, [preview]);

    const { setNodeRef } = useDroppable({
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

    const submit = async () => {
      if (!file) return { file: { publicUrl: preview } };

      setIsUploading(true);
      setIsUploadComplete(false);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const uploadUrl = getApiUrl('upload'); // Replace with your API endpoint

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
        console.log(stream);

        const token = useStore.getState().user?.token;
        const response = await fetch(uploadUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const data = await response.json();
        if (response.ok) {
          setIsUploading(false);
          setIsUploadComplete(true);
        } else {
          setIsUploading(false);
          return null;
        }
        return data;
      } catch (error) {
        if (error) {
          setIsUploading(false);
        }
        return null;
      }
    };

    useImperativeHandle(ref, () => ({
      onUpload: () => submit(),
      setPreview: (preview: string) => setPreview(preview),
      preview,
    }));

    return (
      <form onSubmit={submit} className="space-y-6 relative">
        <div
          onClick={() => document.getElementById('fileInput')?.click()}
          className="max-w-md mx-auto  relative cursor-pointer"
        >
          {/* Dropzone Area */}

          <div
            ref={setNodeRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative px-10 py-28 border-2 border-dashed rounded-lg text-center transition-transform duration-300 z-10
            ${isDragging ? 'scale-105 bg-blue-100 border-blue-400' : 'border-gray-300'} 
            ${isDropped ? 'animate-pulse' : ''}
            hover:scale-105 hover:bg-blue-50`}
          >
            {/* File Input */}
            <div className="z-20 w-full h-full flex flex-col justify-center items-center text-white">
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
              <CiImageOn className="text-5xl" />
              <h1 className="text-white cursor-pointer">+ Change Image</h1>
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
        {isUploading && 'Uploading...'}
      </form>
    );
  },
);

export default FileUpload;
