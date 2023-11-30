import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Sort.css";
import Button from '../assets/Button'
import Slider from '../assets/Slider'
import HeroImage2 from "./HeroImage2"
const ARRAYSIZE = 29

const MergeSort = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('mergeSort')
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
      case 'mergeSort':
        mergeSort()
        break
      default:
        break
    }
  }

  const mergeSort = async () => {
    let currentArr = primaryArray;
    await sort(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
  }

  const sort = async (arr, low, high) => {
    if (low < high) {
      let mid = Math.floor((low + high) / 2)
      await sort(arr, low, mid)
      await sort(arr, mid + 1, high)
      await merge(arr, low, mid, high)
    }
  }

  const merge = async (arr, low, mid, high) => {
    let i = low
    let j = mid + 1
    let k = 0
    let tempArr = []

    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        tempArr[k] = arr[i]
        i++
        k++
      } else {
        tempArr[k] = arr[j]
        j++
        k++
      }
      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = 'white'
      bar2.backgroundColor = 'green'

      await sleep(animationSpeed)

      bar1.backgroundColor = 'rgb(35, 17, 95)'
      bar2.backgroundColor = 'rgb(35, 17, 95)'
    }

    while (i <= mid) {
      tempArr[k] = arr[i]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = 'white'
      bar2.backgroundColor = 'rgb(35, 17, 95)'

      await sleep(animationSpeed)

      bar1.backgroundColor = 'rgb(35, 17, 95)'
      bar2.backgroundColor = 'rgb(35, 17, 95)'

      i++
      k++
    }

    while (j <= high) {
      tempArr[k] = arr[j]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = 'white'
      bar2.backgroundColor = 'rgb(35, 17, 95)'

      await sleep(animationSpeed)

      bar1.backgroundColor = 'rgb(35, 17, 95)'
      bar2.backgroundColor = 'rgb(35, 17, 95)'

      j++
      k++
    }

    for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low]
      setPrimaryArray([...primaryArray, arr])
    }
  }
    return (
      <div>
        <Navbar/>
        <HeroImage2 heading="Merge Sort" text="Time Complexity : O(nlogn)"/>
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

export default MergeSort;