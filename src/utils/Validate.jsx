export const CheckValidate = (Email, Password,Name) => {
    const IsEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(Email);
    const IsPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(Password);
    // const IsNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(Name)
    if (!IsEmailValid)
        return "Email is not valid";
    if (!IsPasswordValid)
        return "Password is not valid";
// if(!IsNameValid)
// return "name is not valid"
    // If both email and password are valid
    return undefined; // or ''
}
