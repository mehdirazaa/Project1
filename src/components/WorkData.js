import pro1 from "../assets/image3.jpg";
import pro2 from "../assets/image4.jpeg";
import pro3 from "../assets/image5.jpeg";
import pro4 from "../assets/image6.jpg";
import pro5 from "../assets/image7.jpeg";
import pro6 from "../assets/image8.jpeg";
import pro7 from "../assets/image9.jpg";
import pro8 from "../assets/image10.jpeg";
import pro9 from "../assets/image11.jpg";
import pro10 from "../assets/image12.jpeg";

const ProjectData = [
    {
        imgsrc: pro1,
        title : "Insertion Sort",
        text: "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
        view: "/InsertionSort"
    },
    {
        imgsrc: pro2,
        title : "Bubble Sort",
        text: "Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order. The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order.",
        view: "/BubbleSort"
    },
    {
        imgsrc: pro3,
        title : "Merge Sort",
        text: "The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.",
        view: "/MergeSort"
    },
    {
        imgsrc: pro4,
        title : "Heap Sort",
        text: "Heap sort processes the elements by creating the min-heap or max-heap using the elements of the given array. Min-heap or max-heap represents the ordering of array in which the root element represents the minimum or maximum element of the array.",
        view: "/HeapSort"
    },
    {
        imgsrc: pro5,
        title : "Quick Sort",
        text: "Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.",
        view: "/QuickSort"
    },
    {
        imgsrc: pro6,
        title : "Radix Sort",
        text: "Radix Sort algorithm is a stable sorting subroutine-based integer sorting algorithm. It is a sorting algorithm that does not use comparisons to sort a collection of integers. It classifies keys based on individual digits with the same significant position and value",
        view: "/RadixSort"
    },
    {
        imgsrc: pro7,
        title : "Bucket Sort",
        text: "Bucket Sort is a sorting technique that places items in buckets, or categories. These items are then prioritized or ranked in order of importance, first by category and then by specific items within each category.",
        view: "/BucketSort"
    },
    {
        imgsrc: pro8,
        title : "Counting Sort",
        text: "Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.",
        view: "/CountingSort"
    },
    {
        imgsrc: pro9,
        title : "Limited Quick Sort",
        text: "We can improve the running time of quicksort in practice by taking advantage of the fast running time of insertion sort when its input is nearly sorted. Upon calling quicksort on a subarray with fewer than elements, let it simply return without sorting the subarray.",
        view: "/LimitedQuicksort"
    },
    {   
        imgsrc: pro10,
        title : "Modified Count Sort",
        text: "We just take the part of COUNTING-SORT that builds up the array C. Whenever we want to count the number of integers in , we take C[b] - C[a-1] (where C[-1] = 0).This yields the number of integers in the given range",
        view: "/ModifiedCountSort"
    }
];

export default ProjectData;