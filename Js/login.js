// Close modal
const modal=document.querySelector('.modal');
const close=document.querySelector('.form-login-close');
const login=document.querySelector('.button-login-icon');
close.addEventListener('click',function(){
    modal.classList.add('modal-hide');
})
login.addEventListener('click',function(){
    modal.classList.remove('modal-hide');
})


// Tran login and Register


const modalLogin=document.querySelector('.modal-form-login');
const modalRegister=document.querySelector('.modal-form-register');
const btnRegister=document.querySelector('.form-tran-register-button');
const btnLogin=document.querySelector('.form-tran-login-button');

btnRegister.addEventListener('click',function(e){
    e.stopPropagation();
    modalRegister.classList.toggle('register-hide');
    modalLogin.classList.toggle('login-hide');
})
btnLogin.addEventListener('click',function(e){
    e.stopPropagation();
    modalRegister.classList.toggle('register-hide');
    modalLogin.classList.toggle('login-hide');
})
//login form
var nameUser=document.querySelector('.Js-nameUser');
document.getElementById('form-signup').addEventListener('click',function signup(e){
    e.stopPropagation();
    var username=document.getElementById("username-signup").value;
    var password=document.getElementById("password-signup").value;
    var user={
        username:username,
        password:password
    };
    if(username==="" || password==="")
    {
        alert('vui lòng nhập tên và mật khẩu');
    }
    else if(username!="" && password!=""){
       
        var json=JSON.stringify(user);
        localStorage.setItem(username,json);
        alert("Đăng kí thành công");
        
    }
    
})
document.getElementById('form-login').addEventListener('click',function loginJs(e){
    e.stopPropagation();
    e.preventDefault();
    var username=document.getElementById("username-login").value;
    var password=document.getElementById("password-login").value;
    var user=localStorage.getItem(username);
    
    var data=JSON.parse(user);
    if(user==null)
    {
        alert("vui lòng nhập tên và mật khẩu");
    }
    else if(username==data.username && password==data.password)
    {
        alert("Đăng nhập thành công");
        nameUser.innerHTML=username;
        window.location.href="index.html";
    }
    else{
        alert("Đăng nhập thất bại");
    }
}
)
// Show eye pass word
const eyeOpen=document.querySelectorAll('.eye-open');
const eyeClose=document.querySelectorAll('.eye-close');

eyeClose.forEach(item => {
    item.addEventListener('click',togglePassword);
})
eyeOpen.forEach(item => {
    item.addEventListener('click',toggleText);
})

function toggleText(){
    this.classList.remove('is-active');
    const input=this.parentNode?.previousElementSibling;
    if(input)
    {
        input.setAttribute("type","password");
    }
}

function togglePassword(){
    const Open=this.previousElementSibling;
    const input=this.parentNode?.previousElementSibling;

    if(Open)
    {
        Open.classList.add('is-active');
    }
    if(input)
    {
        input.setAttribute("type","text");
    }
    
}
