export function getInsertionSortAnimation(array){
    console.log(array)
    const animation = [];
    let i, currentValue, j;
    for( i = 1; i < array.length; i++){
        currentValue = array[i];
         j = i-1;
        while(j >=0 && array[j] > currentValue){
            array[j+1] = array[j];
            animation.push([j+1, array[j]])
            j = j-1;
        }
        array[j+1] = currentValue;
        animation.push([j+1, currentValue])
    }
    console.log(array)
    return animation;
}