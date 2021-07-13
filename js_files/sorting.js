
let size = 50;      // DEFINE THE NO. OF BARS
createBars();       // CALL THE CREATEBARS FUNCTION.

// 1. ADD EVENT LISTENER TO THE 2ND SLIDER WHICH CONTROLS THE NO. OF BARS.
let newSize = document.querySelector('#slider2');

newSize.addEventListener('input', function(){
    size = parseInt(newSize.value);
    createBars();
})

// 2. THIS IS CREATEBARS FUNCTION WHICH WILL CREATE THE BARS
function createBars(){
    deleteChilds();      // IF THERE ARE BARS ALREADY PRESENT THEN WE WILL DELETE PREVIOUS BARS AND ADD NEW ONES.

    // 2(a). CREATE THE BARS
    for(var i = 0; i < size; i++){
        var Ele = document.createElement("div");               // Create a <div> element
        // Ele.innerHTML = "";                                 // No Need to Insert text(NOTE: This text will 
        // be it's child, like an element eg., paragraph)
        Ele.classList.add("mystyle");
        document.getElementById("bar").appendChild(Ele);       // Append this <div> to <div> with id="bar"
    }

    // 2(b). GIVE THE BARS THEIR RANDOM HEIGHT.
    for(var i = 0; i < size; i++){
        let X = Math.round(100 * Math.random());
        document.getElementsByClassName("mystyle")[i].style.height = `${X * 3}px`;
    }
}

// 3. THIS FUCNTION WILL DELETE ALL THE CHILDS OF A SPECIFIC ELEMENT, LIKE HERE WE WANT TO DELETE
// PREVIOUS BARS FROM OUR DIV Element, SO THAT WE CAN ADD NEW BARS IN THE DIV.
function deleteChilds(){
    var bar = document.querySelector('#bar');
    // removeAllChildNodes(bar);    // METHOD 1: BUT THIS WILL ALSO REMOVE ALL THE EVENT HANDLERS.
    // The following code also removes all child nodes of a node:
    bar.innerHTML = "";             // METHOD 2: THIS ALSO DOES THE SAME THING,
    // However, it is not recommended because it doesn’t remove the event handlers of the child nodes,
    // which might cause a memory leak.
}


// 4. THIS FUNCTION WILL UPDATE THE HEIGHT AND COLOR OF THE BARS, MEANS THIS FUNCTION WILL UPDATE THE BARS.
async function update(){
    for(var i = 0; i < size; i++){
        await new Promise(resolve => { 
            setTimeout(() => {
                resolve() }, 1);
        });
        let X = Math.round(100 * Math.random());
        document.getElementsByClassName("mystyle")[i].style.height = `${X * 3}px`;
        document.getElementsByClassName("mystyle")[i].style.backgroundColor = "yellow";
    }
}

// 5. SWAP FUCNTION FOR SWAPPING OF TWO BARS, IN TERMS OF THEIR HEIGHTS.
function swap(el1, el2){
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// 6. THIS FUNCTION IS FOR DISABLING THE BUTTONS, SO THAT A PARTICULAR SORTTING ALGO CAN WORK WITHOUT INTERRUPT.
function disableButtons(){
    var bars = document.querySelectorAll('.btn');

    for(let i = 0; i < 5; i++){
        bars[i].disabled = true;
    }

    document.getElementsByClassName('box1')[0].disabled = true;
}

// 7. THIS FUNCTION IS FOR ENABLING THE DISABLED BUTTONS.
function enableButtons(){
    var bars = document.querySelectorAll('.btn');

    for(let i = 0; i < 5; i++){
        bars[i].disabled = false;
    }

    document.getElementsByClassName('box1')[0].disabled = false;
}

// 8. MAKE A DELAY VARIBALE AND INITIALIZE IT.
let delay = 220;

// 9. ADD THE EVENT LISTENER IN THE 1ST SLIDER TO CONTROL THE SPEED OF THE SORTING.
let newDelay = document.querySelector('#slider1');

newDelay.addEventListener('input', function(){
    delay = 357 - parseInt(newDelay.value);
});

// 10. THIS FUNCTION IS FOR WAIT. 
async function Wait(){
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()}, delay)
    });
}