import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Sorting from "./routes/Sorting";
import InsertionSort from "./components/InsertionSort";
import BubbleSort from "./components/BubbleSort";
import MergeSort from "./components/MergeSort";
import HeapSort from "./components/HeapSort";
import QuickSort from "./components/QuickSort";
import RadixSort from "./components/RadixSort";
import BucketSort from "./components/BucketSort";
import CountingSort from "./components/CountingSort";
import LimitedQuicksort from "./components/LimitedQuicksort";
import ModifiedCountSort from "./components/ModifiedCountSort";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Sorting" element={<Sorting/>} />
      <Route path="/InsertionSort" element={<InsertionSort/>} />
      <Route path="/BubbleSort" element={<BubbleSort/>} />
      <Route path="/MergeSort" element={<MergeSort/>} />
      <Route path="/HeapSort" element={<HeapSort/>} />
      <Route path="/QuickSort" element={<QuickSort/>} />
      <Route path="/RadixSort" element={<RadixSort/>} />
      <Route path="/BucketSort" element={<BucketSort/>} />
      <Route path="/CountingSort" element={<CountingSort/>} />
      <Route path="/LimitedQuicksort" element={<LimitedQuicksort/>} />
      <Route path="/ModifiedCountSort" element={<ModifiedCountSort/>} />
    </Routes> 
  );
}

export default App;
