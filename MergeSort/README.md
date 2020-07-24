# Merge Sort
**Algorithm type**: Sorting algorithm <br>
**Can work in-place**: Yes <br>
**Stable**: Yes <br>
**Time complexity**: Θ(n log n)

## Pseudocode
```
function sort(inputValues: List)
   if |inputValues| = 1 then
      return inputValues
   else
      half ← |inputList| / 2
      list1 ← sort(inputList[0:half])
      list2 ← sort(inputList[half +1:|inputList| -1])
      return merge(list1, list2)
end function

function merge(listA: List, listB: List)
   listC ← []
   while true do
      if |listA| = 0 then
         return listB
      if |listB| = 0 then
         return listA
      if listA[0] <= listB[0] then
         c.append(a[0])
      else
         c.append(b[])
   end while
end function
```

## Animation
[Go to animation](https://www.toptal.com/developers/sorting-algorithms/merge-sort)

© Marc Auberer 2020