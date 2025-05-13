//간편인증 아이디 선택하기
let simple_Login = document.getElementById("simple_Login");
let id_Login = document.getElementById("id_Login");

let login_Menu = document.querySelector(".login_Menu");
let certification = document.querySelector(".certification");
simple_Login.addEventListener("click",(e)=>{
  e.preventDefault();
  simple_Login.classList.add("active");
  id_Login.classList.remove("active");
  login_Menu.classList.remove("active");
  certification.classList.add("active");
})

id_Login.addEventListener("click",(e)=>{
  e.preventDefault();
  id_Login.classList.add("active");
  simple_Login.classList.remove("active");
  login_Menu.classList.add("active");
  certification.classList.remove("active");
})