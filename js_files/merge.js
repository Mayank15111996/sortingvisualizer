
async function merge(bars, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await Wait();   // WAIT FOR SOME TIME.
        bars[low + i].style.background = 'red';
        left[i] = bars[low + i].style.height;
    }

    for(let i = 0; i < n2; i++){
        await Wait();   // WAIT FOR SOME TIME.
        bars[mid + 1 + i].style.background = 'brown';
        right[i] = bars[mid + 1 + i].style.height;
    }

    await Wait();   // WAIT FOR SOME TIME.
    let i = 0, j = 0, k = low;
    
    while(i < n1 && j < n2){
        await Wait();   // WAIT FOR SOME TIME.

        // To add color for which two r being compared for merging
        if(parseInt(left[i]) <= parseInt(right[j])){
            // color
            if((n1 + n2) === bars.length){
                bars[k].style.background = 'rgb(81, 255, 0)';
            }
            else{
                bars[k].style.background = 'lightgreen';
            }
            
            bars[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            // color
            if((n1 + n2) === bars.length){
                bars[k].style.background = 'rgb(81, 255, 0)';
            }
            else{
                bars[k].style.background = 'lightgreen';
            } 
            bars[k].style.height = right[j];
            j++;
            k++;
        }
    }

    while(i < n1){
        await Wait();   // WAIT FOR SOME TIME.
        
        // color
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'rgb(81, 255, 0)';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = left[i];
        i++;
        k++;
    }

    while(j < n2){
        await Wait();   // WAIT FOR SOME TIME.

        // color
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'rgb(81, 255, 0)';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(bars, low, high){
    if(low < high){
        const mid = Math.floor((low + high) / 2);
        await mergeSort(bars, low, mid);
        await mergeSort(bars, mid + 1, high);
        await merge(bars, low, mid, high);
    }
}

async function MergeSort(){
    disableButtons();       // DISABLE ALL THE BUTTONS.
    let bars = document.querySelectorAll('.mystyle');       // FETCH THE BARS FROM THE HTML DOM.
    await mergeSort(bars, 0, parseInt(bars.length - 1));    // CALL THE MERGE SORT FUNCTION.
    enableButtons();        // ENABLE ALL THE DISABLED BUTTONS.
}