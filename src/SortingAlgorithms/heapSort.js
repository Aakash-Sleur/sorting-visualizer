export function getHeapSortAnimation(array){
    const animation = [];
    for(let i= parseInt(array.length/2 -1); i >= 0; i--){
        maxHeapify(array, array.length, i, animation);
    }
    for(let i = array.length-1; i >=0; i--){
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp
        animation.push([i, array[i]])
        maxHeapify(array, i, 0, animation);
    }
    return animation;
}

function maxHeapify(array, n, i, animation){
    let largest = i;
    let leftChildIdx = 2 * i + 1;
    let rightChildIdx = 2 * i + 2;
    if(leftChildIdx < n && array[leftChildIdx] > array[largest]){
        largest = leftChildIdx;
        animation.push([leftChildIdx, array[i]])
    }

    if(rightChildIdx < n && array[rightChildIdx] > array[largest]){
        largest = rightChildIdx;
        animation.push([rightChildIdx, array[i]])
    }

    if(largest !== i){
        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        animation.push([i, array[i]])
        maxHeapify(array, n, largest, animation)
    }
    return animation;

}