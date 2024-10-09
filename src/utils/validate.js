export const checkValidData = (email , password) => {

// eslint-disable-next-line no-undef
const  isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
// eslint-disable-next-line no-undef
const isPasswordValid = /^([0-9]+)([a-zA-Z]+)(.{3,30})$/.test(password);


if(!isEmailValid) return "Email ID is not Valid!";
if(!isPasswordValid) return "Password is not valid! first letter should be number  "

return null;
};