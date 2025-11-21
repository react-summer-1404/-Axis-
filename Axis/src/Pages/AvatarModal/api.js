const BASE_URL = "https://sepehracademy.liara.run/SharePanel";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjcyLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjI1MDU5MzksImV4cCI6MTc2MjU0MTkzOX0.uqs_VkV8gqDthfcUKCSOKsOiayCIm0vB7DeTc2ugxD0";

export const getProfileInfo = async () => {
  const response = await fetch(`${BASE_URL}/GetProfileInfo`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  return await response.json();
};

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('formFile', file); 

  const response = await fetch(`${BASE_URL}/AddProfileImage`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${TOKEN}` },
    body: formData
  });
  return await response.json();
};


export const deleteImage = async (imageId) => {
  const formData = new FormData();
  formData.append('DeleteEntityId', imageId); 

  const response = await fetch(`${BASE_URL}/DeleteProfileImage`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${TOKEN}` },
    body: formData
  });
  return response;
};

export const selectImage = async (imageId) => {
  const formData = new FormData();
  formData.append('ImageId', imageId); 

  const response = await fetch(`${BASE_URL}/SelectProfileImage`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${TOKEN}` },
    body: formData
  });
  return await response.json();
};