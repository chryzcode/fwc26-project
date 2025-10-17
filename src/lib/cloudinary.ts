// Cloudinary utility for image processing and upload

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  bytes: number;
}

export interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
  apiKey?: string;
  apiSecret?: string;
}

// Get Cloudinary configuration from environment variables
export function getCloudinaryConfig(): CloudinaryConfig {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary configuration missing. Please set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET');
  }

  return {
    cloudName,
    uploadPreset,
    apiKey,
    apiSecret
  };
}

// Upload file to Cloudinary (client-side)
export async function uploadToCloudinary(file: File, folder?: string): Promise<CloudinaryUploadResult> {
  const config = getCloudinaryConfig();
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', config.uploadPreset);
  
  if (folder) {
    formData.append('folder', folder);
  }

  // Add transformations for business documents
  formData.append('transformation', 'c_limit,w_1200,h_1200,f_auto,q_auto');
  formData.append('resource_type', 'auto');

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${config.cloudName}/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Cloudinary upload failed: ${errorData.error?.message || response.statusText}`);
    }

    const result = await response.json();
    
    return {
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      resource_type: result.resource_type,
      bytes: result.bytes
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

// Server-side upload using signed upload (requires API key and secret)
export async function uploadToCloudinaryServer(file: File | Buffer, folder?: string): Promise<CloudinaryUploadResult> {
  const config = getCloudinaryConfig();
  
  if (!config.apiKey || !config.apiSecret) {
    throw new Error('Server-side upload requires CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET');
  }

  const formData = new FormData();
  
  if (file instanceof File) {
    formData.append('file', file);
  } else {
    formData.append('file', new Blob([new Uint8Array(file)]), 'document');
  }
  
  formData.append('upload_preset', config.uploadPreset);
  
  if (folder) {
    formData.append('folder', folder);
  }

  // Add transformations for business documents
  formData.append('transformation', 'c_limit,w_1200,h_1200,f_auto,q_auto');
  formData.append('resource_type', 'auto');

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${config.cloudName}/upload`,
      {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Basic ${Buffer.from(`${config.apiKey}:${config.apiSecret}`).toString('base64')}`
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Cloudinary upload failed: ${errorData.error?.message || response.statusText}`);
    }

    const result = await response.json();
    
    return {
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      resource_type: result.resource_type,
      bytes: result.bytes
    };
  } catch (error) {
    console.error('Cloudinary server upload error:', error);
    throw error;
  }
}

// Generate optimized image URL with transformations
export function getOptimizedImageUrl(publicId: string, transformations?: string): string {
  const config = getCloudinaryConfig();
  const baseUrl = `https://res.cloudinary.com/${config.cloudName}/image/upload`;
  
  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`;
  }
  
  return `${baseUrl}/${publicId}`;
}

// Validate file before upload
export function validateFile(file: File): { isValid: boolean; error?: string } {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf'
  ];

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: 'Invalid file type. Please upload JPG, PNG, GIF, WebP, or PDF files only.'
    };
  }

  if (file.size > maxSize) {
    return {
      isValid: false,
      error: 'File size too large. Please upload files smaller than 10MB.'
    };
  }

  return { isValid: true };
}

// Delete image from Cloudinary (server-side only)
export async function deleteFromCloudinary(publicId: string): Promise<boolean> {
  const config = getCloudinaryConfig();
  
  if (!config.apiKey || !config.apiSecret) {
    throw new Error('Deletion requires CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET');
  }

  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = require('crypto')
      .createHash('sha1')
      .update(`public_id=${publicId}&timestamp=${timestamp}${config.apiSecret}`)
      .digest('hex');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${config.cloudName}/image/destroy`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          public_id: publicId,
          timestamp,
          api_key: config.apiKey,
          signature
        })
      }
    );

    const result = await response.json();
    return result.result === 'ok';
  } catch (error) {
    console.error('Cloudinary deletion error:', error);
    return false;
  }
}
