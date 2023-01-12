export function getCombSortAnimation(array){
    let animation = [],
    n = array.length,
    gap = n,
    swapped = true;

    while(gap !== 1 || swapped === true){
        gap = getNextGap(gap);
        swapped = false;
        for(let i=0; i < n-gap; i++){
            if(array[i] > array[i+gap]){
                animation.push([i, array[i+gap]])
                animation.push([i+gap, array[i]])
                let temp = array[i];
                array[i] = array[i+gap];
                array[i+gap] = temp;
                swapped = true;
            }
        }
    }
    return animation
}

function getNextGap(gap){
    gap = parseInt((gap*10)/13, 10);
    if(gap < 1)
        return 1;
    return gap;
}