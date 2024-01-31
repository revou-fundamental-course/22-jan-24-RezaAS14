"use strict";
document.addEventListener("DOMContentLoaded",function(){
    const navigationButton = document.getElementById("navigation-button");
    const navigation = document.getElementById("navigation");

    navigationButton.addEventListener("click",function(){
        navigation.classList.toggle("active");
    });
});

function validateForm() {
    var nameValue = document.forms["Form"]["name"].value;
    var emailValue = document.forms["Form"]["email"].value;
    var optionValue = document.forms["Form"]["interest"].value;

    if (nameValue === "" || nameValue === null) {
        alert("Nama tidak boleh kosong!");
        return false;
    }

    if (emailValue === "" || emailValue === null) {
        alert("Email tidak boleh kosong!");
        return false;
    }

    if (optionValue == 0) {
        alert("Option tidak boleh kosong!");
        return false;
    }

    alert("Validasi formulir berhasil!");
    return true;
}
