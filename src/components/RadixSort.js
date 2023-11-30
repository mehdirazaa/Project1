import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Sort.css";
import Button from '../assets/Button'
import Slider from '../assets/Slider'
import HeroImage2 from "./HeroImage2"

const ARRAYSIZE = 29

const RadixSort = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('radixSort')
  const [animationSpeed, setAnimationSpeed] = useState(50)
  const [disableOptions, setDisableOptions] = useState(false)

  const randomizeArray = () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = 'rgb(35, 17, 95)'
    }
    let array = []
    for (let i = 0; i < ARRAYSIZE; i++) {
      array.push(randomVals(20, 400))
    }

    setPrimaryArray(array)
  }

  const randomVals = (min, max) => {
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min)
    return randomVal
  }

  useEffect(() => {
    randomizeArray()
  }, [])

  const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }

  const finishedAnimation = async () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = 'orange'

      await sleep(animationSpeed)
    }
    setDisableOptions(false)
  }

  const handleSorting = () => {
    setDisableOptions(true)
    switch (algorithm) {
      case 'radixSort':
        radixSort()
        break
      default:
        break
    }
  }
  

  const countingSort = (arr, size, place) => {
  
    let output = new Array(size + 1).fill(0);
    let max = Math.max(...arr);
    let freq = new Array(max + 1).fill(0);
    
    // Calculate count of elements
    for (let i = 0; i < size; i++){
        const num = Math.floor(arr[i] / place) % 10;
        freq[num]++;
    }
    
    // Calculate cummulative count
    for (let i = 1; i < 10; i++){
        freq[i] += freq[i - 1];
    }
  
    // Place the elements in sorted order
    for (let i = size - 1; i >= 0; i--) {
        const num = Math.floor(arr[i] / place) % 10;
        output[freq[num] - 1] = arr[i];
        freq[num]--; 
    }
    
    //Copy the output array
    for (let i = 0; i < size; i++){
      arr[i] = output[i];
    }
    
  }

  const radixSort = async () => {
    let arr = primaryArray
    //Get the max element
    let max = Math.max(...arr); 
  
  //Sort the array using counting sort
    for(let i = 1; parseInt(max / i) > 0; i *= 10){
      countingSort(arr, ARRAYSIZE, i);
    }
    finishedAnimation()
  }
    return (
      <div>
        <Navbar/>
        <HeroImage2 heading="Radix Sort" text="Time Complexity : O(n)"/>
        <div className='container3'>
          <Button
            type='NEWARRAY'
            name='New Array'
            onClick={randomizeArray}
            disabled={disableOptions}
          />
          <Slider
            onChange={(e) => setAnimationSpeed(e.target.value)}
            disabled={disableOptions}
          />
          <Button
            onClick={handleSorting}
            type='SORT'
            name='Sort'
            disabled={disableOptions}
          />
        </div>
        <div className='sortingBars'>
          {primaryArray &&
            primaryArray.map((val, key) => {
              return (
                <div
                  className='bars'
                  id={key}
                  key={key}
                  style={{ height: val }}
                ></div>
              )
            })}
        </div>
        <div className='Values'>
          {primaryArray && primaryArray.map((val) =>{
            return(
              <h5>
                {val}
              </h5>
            )
          })}
        </div>
        <Footer/>
      </div>
  )
}

export default RadixSort;