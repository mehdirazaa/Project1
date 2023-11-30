import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Sort.css";
import Button from '../assets/Button'
import Slider from '../assets/Slider'
import HeroImage2 from "./HeroImage2"
const ARRAYSIZE = 29

const HeapSort = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('heapSort')
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
      case 'heapSort':
        heapSort()
        break
      default:
        break
    }
  }

  const heapSort = async () => {
    let arr = primaryArray
    let length = arr.length
    let index = Math.floor(length / 2 - 1)
    let lastChild = length - 1

    while (index >= 0) {
      await heapify(arr, length, index)
      index--

      setPrimaryArray([...primaryArray, arr])

      if (index >= 0) {
        let bar1 = document.getElementById(index).style
        let bar2 = document.getElementById(index + 1).style
        bar1.backgroundColor = 'white'
        bar2.backgroundColor = 'rgb(35, 17, 95)'

        await sleep(animationSpeed)

        bar1.backgroundColor = 'rgb(35, 17, 95)'
        bar2.backgroundColor = 'rgb(35, 17, 95)'
      } else {
        await sleep(animationSpeed)
      }
    }

    while (lastChild >= 0) {
      let swap1 = arr[0]
      let swap2 = arr[lastChild]

      arr[0] = swap2
      arr[lastChild] = swap1
      await heapify(arr, lastChild, 0)
      lastChild--

      setPrimaryArray([...primaryArray, arr])

      if (index >= 0) {
        let bar1 = document.getElementById(lastChild).style
        let bar2 = document.getElementById(0).style
        bar1.backgroundColor = 'white'
        bar2.backgroundColor = 'rgb(35, 17, 95)'

        bar1.backgroundColor = 'rgb(35, 17, 95)'
        bar2.backgroundColor = 'rgb(35, 17, 95)'
      } else {
        await sleep(animationSpeed)
      }
    }

    finishedAnimation()
  }

  const heapify = async (arr, length, index) => {
    let largest = index
    let leftNode = index * 2 + 1
    let rightNode = leftNode + 1

    if (arr[leftNode] > arr[largest] && leftNode < length) {
      largest = leftNode
    }

    if (arr[rightNode] > arr[largest] && rightNode < length) {
      largest = rightNode
    }

    if (largest !== index) {
      let swap1 = arr[index]
      let swap2 = arr[largest]
      arr[index] = swap2
      arr[largest] = swap1

      let bar1 = document.getElementById(index).style
      let bar2 = document.getElementById(largest).style
      bar1.backgroundColor = 'green'
      bar2.backgroundColor = 'white'

      await sleep(animationSpeed)

      bar1.backgroundColor = 'rgb(35, 17, 95)'
      bar2.backgroundColor = 'rgb(35, 17, 95)'

      await heapify(arr, length, largest)
    }

    return arr
  }

    return (
      <div>
        <Navbar/>
        <HeroImage2 heading="Heap Sort" text="Time Complexity : O(nlogn)"/>
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

export default HeapSort;