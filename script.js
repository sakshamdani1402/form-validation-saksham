const toggle = document.querySelector("#toggle");
const pass = document.querySelector(".password");
const form = document.querySelector('#form');
const user = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');
const modal = document.getElementById('modal');

toggle.addEventListener('click', function () {
    const newType = pass.getAttribute('type') === "password" ? "text" : "password";
    pass.setAttribute('type', newType);
    this.classList.toggle("fa-eye");
})

function showModal() {
    modal.classList.remove('invisible');
}
function closeModal(){
    modal.classList.add('invisible');
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(valid()) showModal(); 
})

function showErr(item) {
    let id;
    console.log(item.id);
    if (item.id == "password") {
        id = item.parentElement.nextElementSibling.id;
        console.log(id);
    }
    else id = item.nextElementSibling.id;
    document.getElementById(id).classList.remove('hidden');
    item.classList.remove('valid');
    item.classList.add('invalid');
}

function showValid(item) {
    let id;
    console.log(item.id);
    if (item.id == "password") {
        id = item.parentElement.nextElementSibling.id;
        console.log(id);
    }
    else id = item.nextElementSibling.id;
    document.getElementById(id).classList.add('hidden');
    item.classList.add('valid');
}

function valid() {
    var flag = true;
    if (user.value.length < 3 || user.value.length > 25)
    { showErr(user); flag=false;} 
    else showValid(user);
    


    if (!email.value.trim().toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        {showErr(email); flag=false;}
    } else showValid(email); 

    const pwd = password.value;
    if (pwd.match(/[a-z]/g) && pwd.match(
        /[A-Z]/g) && pwd.match(
            /[0-9]/g) && pwd.match(
                /[^a-zA-Z\d]/g) && pwd.length >= 8) showValid(password);
    else {showErr(password);  flag=false;}

    if(pwd === confPassword.value) showValid(confPassword);
    else {showErr(confPassword);  flag=false;}

    return flag;
}
