import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Sort.css";
import Button from '../assets/Button'
import Slider from '../assets/Slider'
import HeroImage2 from "./HeroImage2"

const ARRAYSIZE = 29

const BucketSort = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('bucketSort')
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
      case 'bucketSort':
        bucketSort()
        break
      default:
        break
    }
  }

  const bucketSort = async () => {
    let arr = primaryArray
    let i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = arr.length;
    arr.forEach(function (currentVal) {
       if (currentVal < minValue) {
          minValue = currentVal;
       } else if (currentVal > maxValue) {
          maxValue = currentVal;
       }
    })
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let allBuckets = new Array(bucketCount);
    for (i = 0; i < allBuckets.length; i++) {
       allBuckets[i] = [];
       
    }
    arr.forEach(function (currentVal) {
       allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
    arr.length = 0;
    allBuckets.forEach(function(bucket) {
       insertion(bucket);
       bucket.forEach(function (element) {
          arr.push(element)
       });
    });
    // return arr;
    
    finishedAnimation()
  }
  const insertion = arr => {
    let length = arr.length;
    let i, j;
    for(i = 1; i < length; i++) {
       let temp = arr[i];
       for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
        arr[j+1] = arr[j];
        // barsHeight[j+1] = arr[j];
       }
       arr[j+1] = temp;
  
      //barsHeight[j+1] = temp;
      let bar2 = document.getElementById(i).style
      bar2.backgroundColor = 'white'
    }
    // return arr;
  };

    return (
      <div>
        <Navbar/>
        <HeroImage2 heading="Bucket Sort" text="Time Complexity : O(n)"/>
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

export default BucketSort;