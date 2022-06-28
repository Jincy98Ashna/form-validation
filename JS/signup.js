    
    function validate(){
<<<<<<< HEAD
        let email=document.getElementById("email");
        let error=document.getElementById("error");
        let regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$/
        if(regx.test(email.value)){
            error.innerHTML="Valid format";
            error.style.color="green";
            return true;
        }
        else{
            error.innerHTML="Invalid format";
            error.style.color="red";
            return false; 
        }
    }
    
    function validatePass(){
        let password=document.getElementById("password");
        let error=document.getElementById("error");
        let regxpass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(regxpass.test(password.value)){
            error.innerHTML="Valid format";
            error.style.color="green";
            return true;
        }
        else{
            error.innerHTML="Invalid format";
            error.style.color="red";
            return false; 
        }
    }
    
    function validateConpass(){
        let password=document.password.value;  
        let conpassword=document.conpass.value;  
        let error=document.getElementById("error");
      
        if(password==conpass){ 
            error.innerHTML="Valid";
            error.style.color="green";
            return true; 
        return true;  
        }  
        else{  
        error.innerHTML=("password must be same!");  
        error.style.color="red";
        return false;  
        }  
        }  
    
    function validatePhone(){
        let phone=document.phone.value;
        let error=document.getElementById("error");
        let regxx = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
       
        if(regxx.test(phone.value)){
            error.innerHTML="Valid format";
            error.style.color="green";
            return true;
        }
        else{
            error.innerHTML="Invalid format";
            error.style.color="red";
            return false;  
        }
            
    }   
            
          
            
            
            
    
    
    
=======
    let email=document.getElementById("email");
    let error=document.getElementById("error");
    let regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$/
    if(regx.test(email.value)){
        error.innerHTML="Valid format";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid format";
        error.style.color="red";
        return false; 
    }
}

function validatePass(){
    let password=document.getElementById("password");
    let error=document.getElementById("error");
    let regxpass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(regxpass.test(password.value)){
        error.innerHTML="Valid format";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid format";
        error.style.color="red";
        return false; 
    }
}

function validateConpass(){
    let password=document.password.value;  
    let conpassword=document.conpass.value;  
    let error=document.getElementById("error");
  
    if(password==conpass){ 
        error.innerHTML="Valid";
        error.style.color="green";
        return true; 
    return true;  
    }  
    else{  
    error.innerHTML=("password must be same!");  
    error.style.color="red";
    return false;  
    }  
    }  

function validatePhone(){
    let phone=document.phone.value;
    let error=document.getElementById("error");
    let regxx = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
   
    if(regxx.test(phone.value)){
        error.innerHTML="Valid format";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid format";
        error.style.color="red";
        return false;  
    }
        
}   
        
      
        
        
        


>>>>>>> 3f432167a7c8c1e86093e78e2813254847b4a73b
