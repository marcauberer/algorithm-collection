# Naive Text Search
**Algorithm type**: Pattern matching algorithm <br>
**Condition**: No condition <br>
**Time complexity**: O(n * p); n ≙ Length of text; p ≙ Length of pattern

## Pseudocode
### Char comparison
```
function search(text: Sting, pattern: Sting)
   res = []
   for s from 1 to |text| - |pattern| +1 do
      for p from 1 to |pattern| do
         // char mismatch
         cancel inner and restart outer loop
      // Pattern match
      res = res + s
   return res
end function
```
### Text comparison
```
function search(text: Sting, pattern: Sting): Set
   res = []
   for s from 1 to |text| - |pattern| +1 do
      if text[s:s + |p|] == pattern:
         res = res + s
   return res
end function
```

© Marc Auberer 2020