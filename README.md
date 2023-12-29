# AlgorithmVisualiser


# index.html
this is the main page and it is a one page project, this page includes the buttons to activate the sorting algorithms, and the colored rectangular divs that changed based on the sorting algorithm, i also have a slider that changes the size of the array and then another slider to change the speed of the array.

# index.js
this file includes a function to create a random array, a function to update the array when the size is changed, a function to create the speed of the algorithm, and then a function to disable the buttons while the algorithms are ongoing and then also enable the buttons when when the algorithm is finished, the main function to run the functions that uses a switch statement to find the button that was pressed and run the corresponding function.

# algorithms
Bubble sort - Bubble sort works by checks the first 2 numbers, if the first is greater than the second then swap them around, move index by one and repeat the same thing, once you get to the end go back to the start of the list, repeat until solved    

Insertion sort - Insertion sort compares values in turn, starting with the second value in the list. If this value is greater than the value to the left of it, no changes are made. Otherwise this value is repeatedly moved left until it meets a value that is less than it. The sort process then starts again with the next value.

Selection sort - Selection sort works by taking the smallest element in an unsorted array and bringing it to the front. You'll go through each item (from left to right) until you find the smallest one. The first item in the array is now sorted, while the rest of the array is unsorted.

Merge sort - Merge sort continuously cuts down a list into multiple sublists until each has only one item, then merges those sublists into a sorted list

Quick sort - Quick sort works by divides a large data array into smaller ones. A vast array is divided into two arrays, one containing values smaller than the provided value, say pivot, on which the partition is based. The other contains values greater than the pivot value

Shell sort - The method begins by sorting pairs of elements far apart from each other, then gradually narrows the gap between elements to be compared

Comb sort - Comb sort works by repeatedly sorting pairs of elements that are a certain gap apart, rather than only sorting adjacent pairs like bubble sort. This gap starts as the length of the list and is gradually reduced until it is one, at which point the algorithm behaves like bubble sort.

Cycle sort - Cycle sort works by visualising the elements of the array as a cyclic graph, where each node represents an element and the edges represent the desired positions of the elements

Cocktail sort - Cocktail shaker sort is a slight variation of bubble sort. It differs in that instead of repeatedly passing through the list from bottom to top, it passes alternately from bottom to top and then from top to bottom
