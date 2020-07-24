# Selection Sort
**Algorithm type**: Sorting algorithm <br>
**Can work in-place**: No <br>
**Stable**: Stable if the algorithm takes the first minimum, when two equal minimal numbers occur. <br>
**Time complexity**: O(n<sup>2</sup>)

## Pseudocode
```
function sort(inputValues: List)
   insertIndex ← 0
   for i ← 0 to |inputValues| -1 do
      min ← i
      for j ← i + 1 to |inputValues| do
         if inputValues[j] < inputValues[min] then min ← j
      end for
      interchange inputValues[min] and inputValues[insertIndex]
      insertIndex ← insertIndex + 1
   end for
   return inputValues
end function
```

## Animation
[Go to animation](https://www.toptal.com/developers/sorting-algorithms/selection-sort)

© Marc Auberer 2020