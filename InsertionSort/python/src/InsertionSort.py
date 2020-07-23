PRINT_STEPS = True
input_list = [6, 1, 5, 1, 3, 9, 4]


def sort(input_list):
    # Loop through whole input list, starting with index 1
    for i in range(1, len(input_list)):
        j = i
        # Loop backwards down from current position j = i to j = 0 as long as the current input_list[j] is less than
        # input_list[j - 1]
        while j > 0 and input_list[j] < input_list[j - 1]:
            # Save value at current index into a temp variable
            e = input_list[j]
            # Shift all elements > e one position to the right
            input_list[j] = input_list[j - 1]
            input_list[j - 1] = e
            j = j - 1
    # Return updated input list (in-place)
    return input_list


# Main program
result = sort(input_list)
print(result)
exit(0)
