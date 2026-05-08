const usern = "LeianeGabia";
const pword = "0622";

function loginFunction() {
    let userNameInput = document.getElementById("Username").value;
    let passCodeInput = document.getElementById("Password").value;
    let fb = document.getElementById("fb");

    if (usern === userNameInput && pword === passCodeInput) {
        window.alert("Welcome " + userNameInput + "!");
        fb.innerHTML = "Access granted";
        
        setTimeout(function() {
            window.location.href = "notebooks.html";
        }, 1500);
        
    } else if (userNameInput === "" || passCodeInput === "") {
        window.alert("Please input details");
        fb.innerHTML = "Fields are empty";
    } else {
        window.alert("Incorrect username and/or password");
        fb.innerHTML = "Access denied";
    }
}

function clearFeedback() {
    document.getElementById("fb").innerHTML = "";
}