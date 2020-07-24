package main

import "fmt"

const (
	PRINT_STEPS = true
)

func sort(inputList []int) []int {
	// List with only 1 item, does not need to be sorted
	if len(inputList) <= 1 {
		return inputList
	}
	// Split in two halfs
	listA, listB := splitInTwo(inputList)
	// Call the main function
	return merge(sort(listA), sort(listB))
}

func splitInTwo(inputList []int) ([]int, []int) {
	// Split inputList in two halfs
	if PRINT_STEPS {
		fmt.Printf("%v\n", inputList)
	}
	return inputList[:len(inputList) / 2], inputList[len(inputList) / 2:]
}

func merge(list1 []int, list2 []int) []int {
	var outputList []int
	var item int
	// Merge the two lists, so that the result list is sorted
	for {
		if len(list1) == 0 {
			outputList = append(outputList, list2...)
			return outputList
		} else if len(list2) == 0 {
			outputList = append(outputList, list1...)
			return outputList
		} else if list1[0] <= list2[0] {
			item, list1 = list1[0], list1[1:]
		} else {
			item, list2 = list2[0], list2[1:]
		}
		outputList = append(outputList, item)
	}
}

func main() {
	inputList := []int{6, 1, 5, 1, 3, 9, 4}

	result := sort(inputList)
	fmt.Printf("Result: %v", result)
	fmt.Scanln()
}