document.getElementById("register").onclick = function(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let fullName = firstName + lastName
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential)=>{
        let uid = userCredential.user.uid
        // account created successfully
        window.location.href = "home.html";
    })
    .catch((error)=>{
        let errorMessage = error.message
        console.log(errorMessage)
    })
}