import axios from 'axios'
import cloudinaryConfig from '../../cloudinary.config';

export const uploadImageToCloudinary = async (file, folder = '/makaia-transfers-react/payeer/') => {
  const cloudName = cloudinaryConfig.cloudName
  const uploadPreset = 'UnsignedPreset';

  // Create a FormData object to append the file
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('folder', folder); // Specify the folder

  try {
    // Make a POST request to Cloudinary upload API
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    // The response contains details about the uploaded image, including the public URL
    const publicURL = response.data.secure_url;
    return publicURL;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error; // You might want to handle the error appropriately in your application
  }
};