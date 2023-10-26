function validation(){
    // email validation
    var email = document.login.email.value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailFormat))
    {
        setError("emailerror", "*Enter valid email!");
        document.login.email.focus();
        return false;
    }
    clearError("emailerror");

    // password validation
    var password = document.login.password.value;
    if(password.length < 6) {
        setError("passworderror", "*Must contain atleast 6 charactors");
        document.login.password.focus();
        return false;
    }
    var upper = false, lower = false, digit = false, special = false;
    for(const char of password){
        if("a" <= char && char <= "z") lower = true;
    }
    if(!lower){
        setError("passworderror", "*Must contain altleast one lower case latter");
        document.login.password.focus();
        return false;
    }
    for(const char of password){
        if("A" <= char && char <= "Z") upper = true;
    }
    if(!upper){
        setError("passworderror", "*Must contain altleast one upper case latter");
        document.login.password.focus();
        return false;
    }
    for(const char of password){
        if("0" <= char && char <= "9") digit = true;
    }
    if(!digit){
        setError("passworderror", "*Must contain altleast one digit case latter");
        document.login.password.focus();
        return false;
    }
    for(const char of password){
        if(char === "!" || char === "@" || char === "#" || char === "$" || char === "%" || char === "^" || char === "&" || char === "*")
        special = true;
    }
    if(!special){
        setError("passworderror", "*Must contain altleast one special charactor");
        document.login.password.focus();
        return false;
    }
    clearError("passworderror");
}


function setError(id, error){
    document.getElementById(id).innerHTML = error;
}

function clearError(id){
    document.getElementById(id).innerHTML = null;
}