export function getRadixSortAnimation(array){
    let animation = [];
    radixSort(array, array.length, animation)
    return animation

}

function getMax(array, n){
    let mx = array[0];
    for(let i = 1; i < n; i++){
        if(array[i] > mx)
            mx = array[i]
    return mx
    }
}

function radixSort(array, n, animation){
    let m = getMax(array, n);

    for(let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
        countSort(array, n, exp, animation)
}

function countSort(array, n, exp, animation){
    let output = new Array(n)
    let count = new Array(10);
    let i;

    for(let i=0; i<10; i++)
        count[i] = 0
    
    for(i=0; i < n; i++){
        count[Math.floor(array[i] / exp) % 10]++
    }

    for (i = 1; i < 10; i++)
            count[i] += count[i - 1];

    for (i = n - 1; i >= 0; i--) {
        output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        count[Math.floor(array[i] / exp) % 10]--;
    }

    for (i = 0; i < n; i++){
        array[i] = output[i];
        animation.push([i, output[i]])

    }
}