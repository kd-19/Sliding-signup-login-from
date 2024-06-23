
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

var regName = /\d+$/g;  

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


let form1=document.getElementById("formL");
form1.addEventListener("submit",(function(e){
   
    let Email=document.getElementById("EmailL");
    

    if(Email.value=="" || !regEmail.test(Email.value)){
        alert("Invalid Email");
        return false;
    }


    let Password=document.getElementById("PasswordL");

    if(Password.value==""){
        alert("Invalid Password");
        return false;
    }
}))

let form2=document.getElementById("formS");
form2.addEventListener("submit",(function(e){

    let Name=document.getElementById("NameS").value;
    if(Name=="" || regName.test(Name)){
        alert("Invalid Name");
        return false;
    }

    let Email=document.getElementById("EmailS").value;

    if(Email=="" || !regEmail.test(Email)){
        alert("Invalid Email");
        return false;
    }

    let Password=document.getElementById("PasswordS").value;
    if(Password==""){
        alert("Password must be entered");
    }

    let ConfirmPassword=document.getElementById("PasswordS-Confirm").value;
    if(ConfirmPassword=="" || ConfirmPassword != Password){
        alert("Password doesn't match");
        return false;
    }
}))