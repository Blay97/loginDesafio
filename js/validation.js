
window.addEventListener("load",init)

function init(){

  $("#date").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });


  $(document).on('click', '#btnSucess', function(e){
    e.preventDefault();

    let inputName = document.getElementById('name');
    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password');
    let inputPhone = document.getElementById('phone');
    let inputDate = document.getElementById('date');
    let formValid = document.getElementById("form").checkValidity();

    if (formValid) {
      window.location.replace("sucessPage.html");

    }

    if (inputName.value == "") {
      $("#errorName").show();
  
    } else {
      $("#errorName").hide();
  
    }
  
    if (inputEmail.value == "") {
      $("#errorEmail").show();
  
    } else {
      $("#errorEmail").hide();
  
    }
  
    if (inputPassword.value == "") {
      $("#errorPassword").show();
  
    } else {
      $("#errorPassword").hide();
  
    }
  
    if (inputPhone.value == "") {
      $("#errorPhone").show();
  
    } else {
      $("#errorPhone").hide();
  
    }
  
    if (inputDate.value == "") {
      $("#errorAge").show();
  
    } else {
      $("#errorAge").hide();
  
    }
  
    if (!document.getElementById('checkbox').checked) {
      $("#errorCheck").show();
  
    } else {
      $("#errorCheck").hide();
  
    }
  });
  
}

function validateEmail() {
  let email = $("#email").val();
  let mailformat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (email.match(mailformat)) {
    $("#errorEmail").hide();
  }
  else {
    $("#email").val("");
    $("#errorEmail").show();

  }
}


function validateName() {
  let name = $("#name").val();
  let nameFormat = /^[a-zA-Z\s]{4,}$/i;

    if (name.match(nameFormat)) {
      $("#errorName").hide();

    } else {
      $("#name").val("");
      $("#errorName").show();
    }
}

function validatePassword(){
  let password = $("#password").val();
  let passFormat = /^[0-9]{6,9}/i;

  if (password.match(passFormat)) {
    $("#errorPassword").hide();
  }
  else {
    $("#password").val("")
    $("#errorPassword").show();

  }
}

function validatePhone(){
  let phone = $("#phone").val();
  let phoneFormat = /^[0-9]{11}/i;

  if (phone.match(phoneFormat)) {
    $("#errorPhone").hide();
  }
  else {
    $("#phone").val();
    $("#errorPhone").show();

  }



}

