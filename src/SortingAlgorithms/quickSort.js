export function getQuickSortAnimation(array){
    let animations = [];
    quickSort(array, 0, array.length -1, animations)
    return animations;
}

function swap(array, leftIdx, rightIdx, animations){
    let temp = array[leftIdx];
    array[leftIdx] = array[rightIdx];
    array[rightIdx] = temp;
    animations.push([leftIdx, array[leftIdx]])
    animations.push([rightIdx, array[rightIdx]])
}

function partition(array, left, right, animation){
    let pivot = array[Math.floor((right + left)/2)],
    i = left,
    j = right;
    while(i <= j){
        while(array[i] < pivot)
            i++;
        while(array[j] > pivot)
            j--;
        if(i <= j){
            swap(array, i, j, animation);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right, animation){
    let index;
    if(array.length > 1){
        index = partition(array, left, right, animation);
        if(left < index - 1){
            quickSort(array, left, index-1, animation)
        }
        if(index < right){
            quickSort(array, index, right, animation)
        }
    }
}