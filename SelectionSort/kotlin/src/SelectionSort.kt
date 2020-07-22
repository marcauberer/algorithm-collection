const val PRINT_STEPS = true

fun main() {
    // Initialize value spaces
    val inputValues = mutableListOf(6, 1, 5, 1, 3, 9, 4)
    val outputValues = ArrayList<Int>()

    // Loop through input list
    for (i in inputValues.indices) {
        // Find min number in current list
        val indexedValue = inputValues.withIndex().filter { (_, n) -> n != -1 }.minBy { (_, n) -> n }
        // Set -1 at the old position in the input list and add the item to the output list
        indexedValue?.let {
            outputValues += it.value
            inputValues[it.index] = -1
        }
        // Print steps
        if(PRINT_STEPS) println("Step ${i+1} - input: $inputValues; output: $outputValues \n")
    }

    // Print result
    println("Result: $outputValues")
}