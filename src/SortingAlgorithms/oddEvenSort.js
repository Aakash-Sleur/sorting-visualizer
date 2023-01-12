export function getOddEvenSort(array){
    let n = array.length;
    let animation = []
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        let temp = 0;
        for(let i=1; i<=n-2; i=i+2){
            if(array[i] > array[i+1]){
                animation.push([i, array[i+1]])
                animation.push([i+1, array[i]])
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                isSorted = false
            }
        }
        for(let i=0; i<=n-2; i=i+2){
            if(array[i] > array[i+1]){
                animation.push([i, array[i+1]])
                animation.push([i+1, array[i]])
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                isSorted = false
            }
        }
    }
    return animation
}