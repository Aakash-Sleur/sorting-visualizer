export function getCountingSortAnimation(array){
    let animation = [];
    let max = Math.max.apply(Math, array);
    let min = Math.min.apply(Math, array);
    let range = max - min + 1;
    let count = Array.from({length: range}, (_, i) => 0);
    let output = Array.from({length: array.length}, (_, i) => 0);
    for (let i = 0; i < array.length; i++) {
        count[array[i] - min]++;
    }
 
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
 
    for (let i = array.length - 1; i >= 0; i--) {
        output[count[array[i] - min] - 1] = array[i];
        count[array[i] - min]--;
    }
 
    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        animation.push([i, output[i]])
    }
    

    return animation;
}