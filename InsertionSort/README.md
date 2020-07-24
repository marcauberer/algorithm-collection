# Insertion Sort
**Kind**: Sorting algorithm <br>
**Can work in-place**: Yes <br>
**Stable**: Yes <br>
**Time complexity**: O(n<sup>2</sup>)

## Pseudocode
```
function sort(inputValues: List)
   for i := 1 to |inputValues| do
      j ← i
      while j > 1 and inputValues[j] < inputValues[j - 1] do
         e ← inputValues[j]
         inputValues[j] < inputValues[j - 1]
         inputValues[j - 1] ← e
         j ← j - 1
      end while
   end for
   return inputValues
end function
```

## Animation
[Go to animation](https://www.toptal.com/developers/sorting-algorithms/insertion-sort)

© Marc Auberer 2020