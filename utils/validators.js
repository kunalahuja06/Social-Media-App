//for validating register user data
module.exports.validateRegisterInput=(username,email,password,confirmPassword)=>{
    const errors={}
    if(username.trim===''){
        errors.username=`Username can't be empty`
    }
    if (email.trim === "") {
      errors.username = `Email can't be empty`;
    }else{
       const regEx =
         /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
         if(!email.match(regEx)){
             errors.email="Please provide a valid email address"
         }
    }
    if(password===''){
        errors.password=`Password can't be empty`
    }else if(password!==confirmPassword){
        errors.confirmPassword='Passwords should match'
    }
    return{
        errors,
        valid:Object.keys(errors).length<1
    }
}

//for validating the login input
module.exports.validateLoginInput=(username,password)=>{
    const errors={}
    if (username.trim === "") {
      errors.username = `Username can't be empty`;
    }
    if (password === "") {
      errors.password = `Password can't be empty`;
    }
    return {
      errors,
      valid: Object.keys(errors).length < 1,
    };
}

