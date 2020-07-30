# Binary Search
**Algorithm type**: Search algorithm <br>
**Condition**: List has to be sorted <br>
**Time complexity**: O(log n)

## Pseudocode
```
function search(inputValues: List, item: Integer)
   l ← -1
   r ← |inputValues|
   while true:
      if l + 1 == r then
         return null, -1
      m ← floor((l + r) / 2)
      if inputValues[m] = item then
         return inputValues[m], m
      if item > inputValues[m] then
         l ← m
      else
         r ← m
end function
```

## Animation
[Go to animation](https://www.cs.usfca.edu/~galles/visualization/Search.html)

© Marc Auberer 2020