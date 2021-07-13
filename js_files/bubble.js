
async function BubbleSort(){
    disableButtons();                                   // DISABLE ALL THE BUTTONS.
    var bars = document.querySelectorAll('.mystyle');   // FETCH THE BARS FROM THE HTML DOM.

    for(var i = 0; i < bars.length - 1; i++){
        for(var j = 0; j < bars.length - i - 1; j++){

            bars[j].style.backgroundColor = "rgb(250, 0, 0)";           // MAKE THE j'th BAR AS RED.
            bars[j + 1].style.backgroundColor = "rgb(250, 0, 0)";       // MAKE THE (j + 1)'th BAR AS RED.

            if(parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)){
                await Wait();                   // WAIT FOR SOME TIME.
                swap(bars[j], bars[j + 1]);
            }

            bars[j].style.backgroundColor = "yellow";               // MAKE THE j'th BAR AS YELLOW AGAIN.
            bars[j + 1].style.backgroundColor = "yellow";           // MAKE THE (j + 1)'th BAR AS YELLOW AGAIN.
        }
        bars[bars.length - 1 - i].style.backgroundColor = "rgb(81, 255, 0)";    // MAKE THE LAST BAR AS LIGHTGREEN.
    }

    bars[0].style.backgroundColor = "rgb(81, 255, 0)";  // MAKE THE 0'th BAR AS LIGHTGREEN.
    enableButtons();                                    // ENABLE ALL THE DISABLED BUTTONS.
}