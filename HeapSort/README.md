# Heap Sort
**Kind**: Sorting algorithm <br>
**Can work in-place**: Yes <br>
**Stable**: No <br>
**Time complexity**: O(n log n)

## Pseudocode
```
function sort(inputValues: List)
   buildMaxHeap(inputValues)
   for i ← n to 1 do
      interchange(inputValues[1], inputValues[i])
      n ← n - 1
      heapify(inputValues, 1)
   end for
end function

function buildMaxHeap(inputValues: List)
   n ← |inputValues|
   for i ← floor(n / 2) to 1 do
      heapify(inputValues, i)
   end for
end function

function heapify(inputValues: List, i: Integer)
   left ← 2 * i
   right ← 2 * i + 1
   n ← |inputValues|

   if left <= n and inputValues[left] > inputValues[i] then
      max ← left
   else
      max ← i

   if right <= n and inputValues[right] > inputValeus[max]
      max ← right

   if max != i then
      interchange(inputValues[i], inputValues[max])
end function
```

## Animation
[Go to animation](https://www.toptal.com/developers/sorting-algorithms/heap-sort)

© Marc Auberer 2020
