function formvalid() {
  let nam = document.getElementById("name").value.trim();
  let mail = document.getElementById("mail").value.trim();
  let password = document.getElementById("pass").value.trim();
  let confirm = document.getElementById("pass1").value.trim();
  let phone = document.getElementById("contact").value.trim();
  let special = "!@#$*&^><?/";
  if (nam.length < 3) {
    alert("please enter valid name ");
   
    
  } else if (![...special].some((char) => password.includes(char))) {
    alert("password must includes special Characters");
  } else if (confirm !== password) {
    alert("please Enter Valid confirm Password");
  } else if (phone.length !== 10) {
    alert("Enter valid mobile Number 1-10");
  } else {
    alert("Successfully Submitted your form");
  }
}
