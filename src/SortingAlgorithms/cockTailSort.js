export function getCockTailSortAnimation(array){
    let animation = [], 
    swapped = true,
    start = 0,
    end = array.length;

    while(swapped === true){
        swapped = false;
        for(let i = start; i < end; ++i){
            if(array[i] > array[i+1]){
                animation.push([i, array[i+1]])
                animation.push([i+1, array[i]])
                let temp = array[i];
                array[i] = array[i + 1];
                array[i+1] = temp;
                swapped = true;
            }
        }
        if(swapped === false)
            break;
        swapped = false

        end = end - 1;

        for(let i = end-1; i >= start; i--){
            if(array[i] > array[i+1]){
                animation.push([i, array[i+1]])
                animation.push([i+1, array[i]])
                let temp = array[i];
                array[i] = array[i + 1];
                array[i+1] = temp;
                swapped = true;
                
            }
        }
        start = start + 1;
    }
    return animation
}