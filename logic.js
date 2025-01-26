let pass=document.querySelector("#pass");
let mail=document.querySelector("#mail");
let nam=document.querySelector("#name");
let passbtn=document.querySelector("#togglepass");
let msg=document.querySelector(".msg");

passbtn.addEventListener("click",()=>{
    let ispass=pass.type==="password";

    pass.type=ispass?"text":"password";

    if(ispass){
        passbtn.classList.remove("fa-eye"); 
        passbtn.classList.add("fa-eye-slash");
    }else{
        passbtn.classList.remove("fa-eye-slash"); 
        passbtn.classList.add("fa-eye");
    }
});

function pop(){
   
    let is=check();
    if(is){
  msg.classList.remove("hide");
  setTimeout(()=>{
    msg.classList.add("hide");
  },3000)
}else{
    alert("Please Fill The Details");
}
};

function check(){
   return pass.value!==""&&mail.value!==""&&nam.value!=="";
}