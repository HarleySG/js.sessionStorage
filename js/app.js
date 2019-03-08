/*
*
*
*/
let arr_paths = [
   window.location.pathname == '/js.sessionStorage/issues.html',
   window.location.pathname == '/js.sessionStorage/subscription_dashboard.html',
];
var authPaths = new PathAuth(arr_paths);
window.addEventListener('load', function(){
   authPaths.mapArr();
});


//Function called when form is submitted
//Validates form and allows login

if(document.getElementById('loginform')){
   var loginform = document.getElementById('loginform');  
   loginform.addEventListener('submit', function(e){
      return validate(e);
   })
}

function validate(e) {
   'use strict';

   e.preventDefault();

   var UserName = document.getElementById('UserName').value;
   var Password = document.getElementById('Password').value;
   var email = "user@eveilcorp.com";
   var email1 = "admin@eveilcorp.com";
   var pass = "123456";
   var pass1 = "123456";
   // stored data from the register-form
   var storedName = sessionStorage.getItem('userEmail');
   var storedPw = sessionStorage.getItem('password');
   // entered data from the login-form
   //console.log(getSession('oauth'), UserName,storedName,'-', Password, storedPw);

   var userName = document.getElementById('UserName');
   var userPw = document.getElementById('Password');

   if ((UserName == email) && (Password == pass)) {
      console.log('storedName', storedName);
      if ((userName == storedName) && (password == storedPw)) {
         if(getSession('oauth')){
            console.log('???');

            window.location.href = "./issues.html";
            return false;
         }
      }
      console.log('oauth', getSession('oauth'));
      if(getSession('oauth')){
         window.location.href = "./issues.html";
         return false;
      }
   } else if ((UserName == email1) && (Password == pass1)) {
      if(getSession('oauth')){
         console.log('???');
         window.location.href = "./subscription_dashboard.html";
         return false;
      }
   } else {
      alert("username and/or password do not match");
      return false;
   }
}

// End of Validation


// UserStore Module

// Store Username and Password in sessionStorage

function newUser () {

    var userName = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    sessionStorage.setItem("userEmail", userName);
    sessionStorage.setItem("password", password);

}