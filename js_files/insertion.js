
async function InsertionSort(){
    disableButtons();       // DISABLE ALL THE BUTTONS.
    var bars = document.querySelectorAll('.mystyle');   // FETCH THE BARS FROM THE HTML DOM.
    
    for (var i = 1; i < bars.length; i++){
        var key = bars[i].style.height;
        bars[i].style.backgroundColor = "red";  // MAKE THE i'th BAR AS RED.

        await Wait();   // WAIT FOR SOME TIME.
        var j = i - 1;
        
        while(j >= 0 && parseInt(bars[j].style.height) > parseInt(key)){
            bars[j].style.backgroundColor = "red";
            await Wait();   // WAIT FOR SOME TIME.
            bars[j + 1].style.height = bars[j].style.height;
            j--;
            
            for(let k = i; k >= 0; k--){
                bars[k].style.background = 'rgb(81, 255, 0)';   // MAKE THE k'th BAR AS LIGHTGREEN.
            }
        }
        
        bars[j + 1].style.height = key;
        bars[i].style.backgroundColor = "rgb(81, 255, 0)";      // MAKE THE i'th BAR AS LIGHTGREEN.
    }
    
    enableButtons();    // ENABLE ALL THE DISABLED BUTTONS.
}