export function getBubbleSortAnimations(array){
    let animation = [];
    let auxiliaryArray = array.slice();
    auxiliaryArray.push(0);
    for(let i=0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(auxiliaryArray[j] < auxiliaryArray[j+1])
                animation.push([j, auxiliaryArray[j]])
            else{
                let temp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j+1];
                auxiliaryArray[j+1] = temp;
                animation.push([j, auxiliaryArray[j+1]])

                if(auxiliaryArray[j] !== 0)
                    animation.push([j, auxiliaryArray[j]])
                }

        }
    }
    console.log(array)
    return animation;
}