import { showErrorMessage } from "./errorHandler"

export const registerFormValidator = (data) => {
  if (!/^[a-zA-Z0-9_-]{4,20}$/.test(data.username)) {
    showErrorMessage('Username must be 4 to 20 characters and may include letters, numbers, underscores, or hyphens.');
    return false
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    showErrorMessage('Invalid email address.');
    return false
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
    showErrorMessage('Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
    return false
  }
  if (data.repeatPassword !== data.password) {
    showErrorMessage("Password doesn't match!")
    return false
  }
  return true
}

export const loginFormValidatior = (data) => {
  if (data.username === '' || data.password === '') {
    showErrorMessage("Username and Password are required!")
    return false
  }
  return true
}

export const createFormValidator = (data) => {
  const bedrooms = Number(data.bedrooms);
  const size = Number(data.size);
  const price = Number(data.price);
  if (data.address.length < 4 || data.address.length > 50) {
    showErrorMessage('Address must be between 4 and 50 characters.');
    return false
  }
  if (data.type.length < 4 || data.type.length > 20) {
    showErrorMessage('Type must be between 4 and 20 characters.');
    return false
  }

  if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(data.imageUrl)) {
    showErrorMessage('Invalid image URL.');
    return false
  }
   if (typeof bedrooms !== 'number' || bedrooms <= 0) {
     showErrorMessage('Bedrooms must be a positive integer.');
     return false
   }
  if (typeof size !== 'number' || size <= 0) {
    showErrorMessage('Size must be a positive number.');
    return false
  }
  if (typeof price !== 'number' || price <= 0) {
    showErrorMessage('Price must be a positive number.');
    return false
  }
  if (data.description.length < 5 || data.description.length > 300) {
    showErrorMessage('Description must be between 5 and 300 characters.');
    return false
  }
  
  return true
}