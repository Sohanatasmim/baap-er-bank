// step-1 add Event clicked handler with submit button  
document.getElementById('btn-submit').addEventListener('click',function(){
    
    //step-2 get the email address inside email input field
    // always remember to use value to get text from an input field
    const emailField= document.getElementById('user-email');
    const email= emailField.value;
    // step-3 get the password inside password input field
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    // do not verify that way
    // step-4 verify email and password and check whether valid user or not
    if(email=='sohana@gmail.com' && password=='secret'){
        window.location.href='bank.html';
    } 
    else{
        alert('invalid user')
    }
})

 