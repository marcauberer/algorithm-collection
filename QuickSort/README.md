# Quick Sort
**Algorithm type**: Sorting algorithm <br>
**Can work in-place**: Yes <br>
**Stable**: No (because of randomization) <br>
**Time complexity**: Average case: O(n log n), Worst case: O(n<sup>2</sup>)

## Pseudocode
```
function sort(inputValues: List, l: Integer, r: Integer)
   if l < r then
      q ← partition(inputValues, l, r)
      sort(inputValues, l, q - 1)
      sort(inputValues, 1 + 1, r)
end function

function partition(list: List, l: Integer, r: Integer)
   z ← random(l, r)
   interchange(list[z], list[r])
   p ← list[r]
   i ← l - 1
   for j ← l to r - 1 do
      if list[j] <= p then
         i ← i + 1
         interchange(list[i], list[j])
   end for
   interchange(list[i + 1], list[r + 1])
   return i + 1
end function
```

## Animation
[Go to animation](https://www.toptal.com/developers/sorting-algorithms/quick-sort)

© Marc Auberer 2020