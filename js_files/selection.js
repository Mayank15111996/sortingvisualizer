
async function SelectionSort(){
    disableButtons();                                       // DISABLE ALL THE BUTTONS.
    var bars = document.querySelectorAll('.mystyle');       // FETCH THE BARS FROM THE HTML DOM.

    // APPLY THE SELECTION SORT.
    for(let i = 0; i < bars.length; i++){
        let minIdx = i;
        bars[i].style.backgroundColor = "darkblue";         // MAKE THE i'th BAR AS DARKBLUE.

        await Wait();       // WAIT FOR SOME TIME.

        for(let j = i + 1; j < bars.length; j++){
            bars[j].style.backgroundColor = "red";          // MAKE THE j'th BAR AS RED.

            await Wait();   // WAIT FOR SOME TIME.

            if(parseInt(bars[j].style.height) < parseInt(bars[minIdx].style.height)){
                if (minIdx !== i) {
                    bars[minIdx].style.backgroundColor = "yellow";  // MAKE THE (minIdx)th BAR AS YELLOW AGAIN.
                }
                minIdx = j;
            }
            else{
                bars[j].style.backgroundColor = "yellow";   // MAKE THE j'th BAR AS YELLOW AGAIN.
            }
        }

        bars[minIdx].style.backgroundColor = "yellow";      // MAKE THE (minIdx)th BAR AS YELLOW AGAIN.
        bars[i].style.backgroundColor = "rgb(81, 255, 0)";  // MAKE THE i'th BAR AS LIGHTGREEN.

        swap(bars[minIdx], bars[i]);
    }

    enableButtons();    // ENABLE ALL THE DISABLED BUTTONS.
}