const password_checker =document.querySelector('.password-checker');
const password =document.querySelector('#password');
const progress_bar =document.querySelector('.bar');

password.onkeyup = () => {
    
    console.log(password.value);
    checkPasswordStrength(password.value)
};
function checkPasswordStrength(password){
    let strength =0;

    if(password.match(/(?=.*[A-Z])/)) strength++;
    if(password.match(/(?=.*[a-z])/)) strength++;
    if(password.match(/(?=.*[0-9])/)) strength++;
    if(password.match(/(?=.*[`!@#$%^&*])/)) strength++;


    if(password.match(/(?=.{9})/)) strength++;

  

    console.log(strength);

    switch(strength){
        case 0:
            password_checker.style.borderColor='transparent';
            progress_bar.style.cssText=`width :${(strength/5)*100}%; background-color:unset; `
            break;
        case 1:
            password_checker.style.borderColor='red';
            progress_bar.style.cssText=`width :${(strength/5)*100}%; background-color:red; `
            break;
        case 2:
                password_checker.style.borderColor='orange';
                progress_bar.style.cssText=`width :${(strength/5)*100}%; background-color:orange; `
                break;
        case 3:
            password_checker.style.borderColor='gold';
            progress_bar.style.cssText=`width :${(strength/5)*100}%; background-color:gold; `
            break;
        case 4:
            password_checker.style.borderColor='deepskyblue';
            progress_bar.style.cssText=`width :${(strength/5)*100}%; background-color:deepskyblue; `
            break;
        case 5:
            password_checker.style.borderColor='lime';
            progress_bar.style.cssText=`width :${(strength/5)*100}%; background-color:lime; `
            break;
    }
}