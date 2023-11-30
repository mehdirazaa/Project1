import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Sort.css";
import Button from '../assets/Button'
import Slider from '../assets/Slider'
import HeroImage2 from "./HeroImage2"


const ARRAYSIZE = 29

const ModifiedCountSort = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('modifiedCountSort')
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
      case 'modifiedCountSort':
        modifiedCountSort()
        break
      default:
        break
    }
  }

  const modifiedCountSort = async () => {
    let a = 0
    let b = 5
    let array = primaryArray
    let size = primaryArray.length
    let count = [] 
    let output = []
    let k

    let max = array[0];
    for (let i = 1; i < size; i++) {
      if (array[i] > max){
        max = array[i];
      }
    } // finding max
    
    for (let i = 0; i < max; ++i) {
      count[i] = 0;
    }

    for (let i = 0; i < size; i++) {
      count[array[i]]++;
        for (let i = b; i > a - 1; i--)
        {
            k++;
        }
    }

    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }

    for (let i = size - 1; i >= 0; i--) {
      output[count[array[i]] - 1] = array[i];
      count[array[i]]--;
    }

    for (let i = 0; i < size; i++) {
      array[i] = output[i];
    }
    finishedAnimation()
  }
    return (
      <div>
        <Navbar/>
        <HeroImage2 heading="Modified Count Sort " text="Time Complexity : O(n)"/>
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

export default ModifiedCountSort;