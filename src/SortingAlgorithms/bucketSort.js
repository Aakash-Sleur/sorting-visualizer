export function bucketSort(array){
    const n = array.length;
    let animation = [];
    if(n <= 0)
        return ;
        let buckets = new Array(n);
    for(let i = 0; i < n; i++){
        buckets[i] = []
    }

    for(let i =0; i < n; i++){
        let idx = array[i] * n;
        buckets[Math.floor(idx)].push(array[i])
    }

    for(let i = 0; i < n; i++){
        buckets[i].sort((a, b) => a-b)
    }

    let idx = 0;
    for(let i = 0; i < n; i++){
        for(let j =0; i < buckets[i]; j++){
            array[idx++] = buckets[i][j]
            animation[idx++].push([idx++], buckets[i][j])
        }
    }
    return animation
}