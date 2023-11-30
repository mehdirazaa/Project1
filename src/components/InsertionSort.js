import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Sort.css";
import Button from '../assets/Button'
import Slider from '../assets/Slider'
import HeroImage2 from "./HeroImage2"

const ARRAYSIZE = 29

const InsertionSort = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('insertionSort')
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
      case 'insertionSort':
        insertionSort()
        break
      default:
        break
    }
  }

  const insertionSort = async () => {
    let currentArr = primaryArray
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
      if (sorted) finishedAnimation()
    }
  }
    return (
      <div>
        <Navbar/>
        <HeroImage2 heading="Insertion Sort" text="Time Complexity : O(n^2)" />
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

export default InsertionSort;