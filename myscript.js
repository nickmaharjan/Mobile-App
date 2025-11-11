function backgroundChange(){
    document.querySelector(".Maharjan").style.backgroundColor = "yellow";
}

function imageChange() {
    document.querySelector(".Khanal img").src = "images/IMG_20221221_135949.jpg";
}

function addition(){
    let a = 5;
    let b = 6;
    let c = a + b;
    document.getElementById("add").innerText = "Sum: " + c;
}

function subtraction(){
    let a = 10;
    let b = 4;
    let c = a - b;
    document.getElementById("sub").innerText = "Difference: " + c;
}

function multiplication(){
    let a = 7;
    let b = 8;
    let c = a * b;
    document.getElementById("mul").innerText = "Product: " + c;
}   

function division(){
    let a = 20;
    let b = 50;
    let c = a / b;
    document.getElementById("div").innerText = "Quotient: " + c;
}

function ShowCaste() {
    let input = document.getElementById("ethnicity").value.trim().toLowerCase();
    let img = document.getElementById("displayImage");
    let msg = document.getElementById("message");
    if (input === "newar") {
        img.src = "images/newar.jpg";
        img.style.display = "block";
    } else if (input === "non-newar") {
        img.src = "images/nonnewar.jpg";
        img.style.display = "block";
    } else {
        msg.innerText = "Please enter 'Newar' or 'Non-Newar'.";
        img.style.display = "none";
    }
}
