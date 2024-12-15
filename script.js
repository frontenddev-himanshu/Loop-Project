// function

function createBox(btn) {

    // div
    let body = document.querySelector("body");

    let newBox = document.createElement("div");

    body.appendChild(newBox);

    // btn
    let newBtn = document.createElement("button");

    newBox.appendChild(newBtn);

    newBtn.innerText = (btn);

}



// for loop

for (let count = 1; count <= 10; count++) {
    console.log(createBox());
    
}