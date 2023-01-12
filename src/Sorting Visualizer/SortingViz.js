import React from 'react'
import './viz.css'
import { useState, useEffect } from 'react'
import { getMergeSortAnimation } from '../SortingAlgorithms/mergeSort';
import { getQuickSortAnimation } from '../SortingAlgorithms/quickSort';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort';
import { getHeapSortAnimation } from '../SortingAlgorithms/heapSort';
import { getInsertionSortAnimation } from '../SortingAlgorithms/insertionSort';
import { getShellSortAnimation } from '../SortingAlgorithms/shellSort';
import { getCockTailSortAnimation } from '../SortingAlgorithms/cockTailSort';
import { getCombSortAnimation } from '../SortingAlgorithms/combSort';
import { getOddEvenSort } from '../SortingAlgorithms/oddEvenSort';
import { getRadixSortAnimation } from '../SortingAlgorithms/radixSort';
import {  getCountingSortAnimation } from '../SortingAlgorithms/countingSort';

function SortingViz() {
    const [arr, setArr] = useState([]);
    const [algo, setAlgo] = useState('quickSort')
    const [barCount, setBarCount] = useState(30)
    const [timeCount, setTimeCount] = useState(1)
    const primary = 'skyblue';
    const secondary = 'black';

    const randomValueInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const generateArray = () => {
        const array = [];
        for(let i=0; i < barCount; i++){
          array.push(randomValueInt(5, 550));
        }
        setArr(array)
    }
    
    function handleSort() {
        algo === 'bubbleSort' ? bubbleSort() :
        algo === 'heapSort' ? heapSort():
        algo === 'mergeSort' ? mergeSort():
        algo === 'insertionSort' ? insertionSort():
        algo === 'shellSort' ? shellSort():
        algo === 'cockTailSort' ? cockTailSort():
        algo === 'combSort' ? combSort():
        algo === 'oddEvenSort' ? oddEvenSort():
        algo === 'radixSort' ? radixSort():
        algo === 'bucketSort' ? bucketSort():
        algo === 'countingSort' ? countingSort():
        quickSort();
    }


    useEffect(() => {
        generateArray();
    }, [barCount])

   const mergeSort = () => {
        const animations = getMergeSortAnimation(arr);

        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('bars');

            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barsOneIdx, barsTwoIdx] = animations[i];               
                const color = i % 3 === 0 ? secondary : primary;
                setTimeout(() => {
                    arrayBars[barsOneIdx].style.backgroundColor = color;
                    arrayBars[barsTwoIdx].style.backgroundColor = color;
                }, i * timeCount);
            }
            else {
                setTimeout(() => {
                    const [barsOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barsOneIdx].style;
                    barOneStyle.height = `${newHeight}px`
                }, i* timeCount)
            }
        }
    }

    const quickSort = () => {
        const animations = getQuickSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const heapSort = () => {
        const animations = getHeapSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const oddEvenSort = () => {
        const animations = getOddEvenSort(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const bubbleSort = () => {
        const animations = getBubbleSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const shellSort = () => {
        const animations = getShellSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const cockTailSort = () => {
        const animations = getCockTailSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const insertionSort = () => {
        const animations = getInsertionSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];                
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const combSort = () => {
        const animations = getCombSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const radixSort = () => {
        const animations = getRadixSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const bucketSort = () => {
        const animations = getBubbleSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
          }
    }

    const countingSort = () => {
        const animations = getCountingSortAnimation(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            if (i<= animations.length) {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * timeCount);        
            }
            
          }
    }


    return (
    <div className="main-container flex flex-row h-[100vh]">
        
       <div className='h-screen w-80 bg-gradient-to-b from-[#000428] to-[#004e92] flex flex-col space-x-6 pt-10 px-5 bg-black text-white lg:justify-evenly'>
            <div className='flex flex-col ml-5'>
            
                <label htmlFor="small" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Algorithms</label>
                <select id="small" onChange={(e)=> setAlgo(e.target.value)}  className="p-2 mb-6 text-sm flex grow-0 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="quickSort" >Quick Sort</option>
                <option value="mergeSort" >Merge Sort</option>
                <option value="heapSort" >Heap Sort</option>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="shellSort">Shell Sort</option>
                <option value="cockTailSort">Cocktail Sort</option>
                <option value="combSort">Comb Sort</option>
                <option value="oddEvenSort">Odd/Even Sort</option>
                <option value="radixSort">Radix Sort</option>
                <option value="bucketSort">Bucket Sort</option>
                <option value="countingSort" >Counting Sort</option>
                </select> 
            </div>
            <div>
            </div>

            
            
            <div className='flex flex-col my-12 space-y-3 text-red'>
                <span>Bars: {barCount}</span>
                <input type="range" name="bars" value={barCount} min={1} max={100} onChange={(e)=>setBarCount(Number(e.target.value))}  id="bar-range" />
                <span>Time: {timeCount}ms</span>
                <input type="range" name="time" value={timeCount} min={1} max={300} onChange={(e)=>setTimeCount(Number(e.target.value))}  id="time-range" />
            </div>
            <div className='flex flex-col space-y-5 m-5 justify-around'>
            <button className=' bg-white border border-solid h-10 text-black w-30 p-2 rounded-md hover:text-blue-400' onClick={() => generateArray()} >Randomize</button>
            <button className='border border-solid h-10 bg-white text-black w-30 p-2 rounded-md hover:text-blue-400' onClick={() => handleSort()} >Sort</button>
            </div>
         </div>

         <div className='flex flex-col flex-auto mb-3 px-5'>
            <div className='text-[#ecebff] w-full text-center mt-2 mb-8 text-5xl '>Sorting Visualizer</div>
            <div className='flex items-center justify-center mb-3'>
            {
                (arr.map((value, idx) => (
                    <div className="bars" 
                    key={idx}
                    style = {{height:`${value}px`, backgroundColor:primary,}}
                    >
                    </div>
                )))
                
            }
            </div>
        </div>
    </div>
  )
}


export default SortingViz