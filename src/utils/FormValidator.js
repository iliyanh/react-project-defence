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
      if(data.repeatPassword !== data.password){
        showErrorMessage("Password doesn't match!" )
        return false
      }
      return true     
}
export const loginFormValidatior = (data) => {
  if(data.username === '' || data.password === ''){
    showErrorMessage("Username and Password are required!")
    return false
  }
  return true
}