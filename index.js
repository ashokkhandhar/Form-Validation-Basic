var tnc = document.getElementById('tnc');
var submit = document.getElementById('submit');
tnc.addEventListener('change', function() {
    if(tnc.checked) {
        submit.removeAttribute('disabled');
    } else {
        submit.setAttribute('disabled', 'disabled');
    }
});

function formValidation(){
    
    // name validaion
    var name = document.forms['signUp']["fullname"].value;
    if(!/^[A-Za-z ]+$/.test(name)) {
        setError("nameerror", "*Enter valid name!");
        document.signUp.fullname.focus();
        return false;
    }
    clearError("nameerror");
    
    // email validation
    var email = document.signUp.email.value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailFormat))
    {
        setError("emailerror", "*Enter valid email!");
        document.signUp.email.focus();
        return false;
    }
    clearError("emailerror");
    
    // password validation
    var password = document.signUp.password.value;
    if(password.length < 6) {
        setError("passworderror", "*Must contain atleast 6 charactors");
        document.signUp.password.focus();
        return false;
    }
    var upper = false, lower = false, digit = false, special = false;
    for(const char of password){
        if("a" <= char && char <= "z") lower = true;
    }
    if(!lower){
        setError("passworderror", "*Must contain altleast one lower case latter");
        document.signUp.password.focus();
        return false;
    }
    for(const char of password){
        if("A" <= char && char <= "Z") upper = true;
    }
    if(!upper){
        setError("passworderror", "*Must contain altleast one upper case latter");
        document.signUp.password.focus();
        return false;
    }
    for(const char of password){
        if("0" <= char && char <= "9") digit = true;
    }
    if(!digit){
        setError("passworderror", "*Must contain altleast one digit case latter");
        document.signUp.password.focus();
        return false;
    }
    for(const char of password){
        if(char === "!" || char === "@" || char === "#" || char === "$" || char === "%" || char === "^" || char === "&" || char === "*")
        special = true;
    }
    if(!special){
        setError("passworderror", "*Must contain altleast one special charactor");
        document.signUp.password.focus();
        return false;
    }
    clearError("passworderror");
    // confirm password validation
    var cpassword = document.signUp.cpassword.value;
    if(password != cpassword){
        document.signUp.cpassword.focus();
        setError("cpassworderror", "*confirm password must mach with password");
        return false;
    }
    clearError("cpassworderror");
}


function setError(id, error){
    document.getElementById(id).innerHTML = error;
}

function clearError(id){
    document.getElementById(id).innerHTML = null;
}