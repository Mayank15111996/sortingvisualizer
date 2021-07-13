
async function partition(low, high){
    var bars = document.querySelectorAll('.mystyle');       // FETCH THE BARS FROM THE HTML DOM.
    var i = low, j = low;
    var pivot = bars[high];
    pivot.style.backgroundColor = "darkblue";               // MAKE THE PIVOT'th BAR AS DARKBLUE.

    while(i <= high){
        bars[i].style.backgroundColor = "red";              // MAKE THE i'th BAR AS RED.

        await Wait();       // WAIT FOR SOME TIME.

        if(parseInt(bars[i].style.height) <= parseInt(pivot.style.height)){
            bars[j].style.background = 'orange';
            if(i != j) bars[i].style.background = 'orange';
            
            swap(bars[i], bars[j]);     // SWAP THE i'th AND j'th BAR.
            
            await Wait();   // WAIT FOR SOME TIME.
            i++;
            j++;
        }
        else{
            bars[i].style.background = 'pink';              // MAKE THE i'th BAR AS PINK.
            i++;
        }
    }

    bars[high].style.background = 'pink';                   // MAKE THE HIGH'th BAR AS PINK.
    bars[j - 1].style.background = 'rgb(81, 255, 0)';       // MAKE THE (j - 1)'th BAR AS LIGHTGREEN.

    for(let k = 0; k < bars.length; k++){
        if(bars[k].style.backgroundColor != 'rgb(81, 255, 0)'){
            bars[k].style.backgroundColor = 'yellow';       // MAKE THE k'th BAR AS YELLOW IF IT IS NOT LIGHTGREEN.
        }
    }

    return j - 1;       // RETURN THE PIVOT-INDEX.
}

async function quickSort(low, high){
    var bars = document.querySelectorAll('.mystyle');

    if(low < high){
        var pivotIndex = await partition(low, high);
        await quickSort(low, pivotIndex - 1);
        await quickSort(pivotIndex + 1, high);
    }
    else{
        if(low >= 0 && high >= 0 && low < bars.length && high < bars.length){
            bars[low].style.background = 'rgb(81, 255, 0)';
            bars[high].style.background = 'rgb(81, 255, 0)';
        }
    }
}

async function QuickSort(){
    disableButtons();           // DISABLE ALL THE BUTTONS.
    var bars = document.querySelectorAll('.mystyle');
    await quickSort(0, bars.length - 1);
    enableButtons();            // ENABLE ALL THE DISABLED BUTTONS.
}