import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import "./Sort.css";
import Button from '../assets/Button'
import Slider from '../assets/Slider'
import HeroImage2 from "./HeroImage2"

const ARRAYSIZE = 29

const LimitedQuicksort = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('limitedQuicksort')
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
      case 'limitedQuicksort':
        limitedQuicksort()
        break
      default:
        break
    }
  }
  
  const limitedQuicksort = async () => {
    let currentArr = primaryArray
    
  if(ARRAYSIZE < 10){
    await InsertionSort(currentArr)  
  
  }else{
    await sorts(currentArr, 0, currentArr.length-1) 
    
  }

  finishedAnimation()
  }

  const sorts = async (arr, left, right) =>{
    if (left < right) {
      let partitionIndex = partition(arr, left, right)

      setPrimaryArray([...primaryArray, arr])
      await sleep(animationSpeed)
      await sorts(arr, left, partitionIndex - 1)
      await sorts(arr, partitionIndex + 1, right)
    }
  }

  
  const InsertionSort = async (currentArr) => {
    let sorted = false

    while (!sorted) {
      sorted = true

      for (let i = 1; i < currentArr.length; i++) {
        let current = currentArr[i]
        let j = i - 1
        while (j >= 0 && currentArr[j] > current) {
          currentArr[j + 1] = currentArr[j]
          setPrimaryArray([...primaryArray, currentArr])
      
          
          let bar1 = document.getElementById(j + 1).style
          let bar2 = document.getElementById(j).style
          bar1.backgroundColor = 'white'
          bar2.backgroundColor = 'rgb(35, 17, 95)'
          
          await sleep(animationSpeed)
          
          bar1.backgroundColor = 'rgb(35, 17, 95)'
          bar2.backgroundColor = 'rgb(35, 17, 95)'

          j--
          sorted = false
        }
        currentArr[j + 1] = current
        setPrimaryArray([...primaryArray, currentArr])
      }
    }
  }
  const partition = (arr, left, right) => {
    let pivot = arr[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        let bar1 = document.getElementById(i).style
        let bar2 = document.getElementById(j).style
        bar1.backgroundColor = 'white'
        bar2.backgroundColor = 'green'

        setTimeout(() => {
          bar1.backgroundColor = 'rgb(35, 17, 95)'
          bar2.backgroundColor = 'rgb(35, 17, 95)'
        }, 200)

        setPrimaryArray([...primaryArray, arr])
      }
    }

    let temp = arr[i + 1]
    arr[i + 1] = arr[right]
    arr[right] = temp

    return i + 1
  }

  
 
  
    return (
      <div>
        <Navbar/>
        <HeroImage2 heading="Limited Quicksort" text="Time Complexity : O(n)"/>
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

export default LimitedQuicksort;