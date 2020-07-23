# Selection Sort
**Algorithm type**: Sorting algorithm <br>
**Can work in-place**: No <br>
**Stable**: Stable if the algorithm takes the first minimum, when two equal minimal numbers occur.

## Time complexity
O(n^2)

## Pseudocode
```
function sort(inputValues):
   insertIndex ← 0
   for i := 0 to |inputValues| -1 do
      min ← i
      for j := i + 1 to |inputValues| do
         if inputValues[j] < inputValues[min] then
            min ← j
      end for
      interchange inputValues[min] and inputValues[insertIndex]
      insertIndex ← insertIndex + 1
   end for
end function
```

## Animation
![SelectionSort animation](https://upload.wikimedia.org/wikipedia/commons/6/6d/Selsort_de_0.gif) <br>
**Source: wikimedia.org**

© Marc Auberer 2020