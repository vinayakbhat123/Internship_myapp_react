export const LoginDataValidation = (email,password) => {
 const EmailValidation =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const PasswordValidation =
  /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password);
 
 if (!EmailValidation) return "Email Id Not valid";
 if (!PasswordValidation) return "Password Not Valid";
 return null;
}

export const SignupDataValidation =(FormData) => {
  const {FullName,Email,Password,Confirm} = FormData
  const EmailValidation =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);
  const PasswordValidation = /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(Password);
  const ConfirmValidation = /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(Confirm);
  
  if(!EmailValidation) return "Email Not Valid"
  if(!PasswordValidation) return "Password Not valid"
  if(!ConfirmValidation) return "Confirm Password Not Valid"

  if(FullName.length < 3 || FullName === "" || FullName.length > 15  ) {
    return "FullName minimum 3  characters and maximum 15 characters"
  }
  if (Password.length < 8 || Password.length > 15 || Password===""){
    return "Password minimum 8 and maximum 15 string"
  }
  if (Password !== Confirm){
    return "Passwords Not match "
  }

  return null
} 