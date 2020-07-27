using System;
using System.Collections.Generic;
using System.Linq;

namespace Bucket_Sort {
    class Program {

        private int[] inputValues = new int[] { 6, 1, 5, 1, 3, 9, 4 };
        private bool PRINT_BUCKETS = true;

        static void Main(string[] args) {
            new Program();
        }

        private Program() {
            int[] result = sort(inputValues);
            // Print result
            Console.WriteLine();
            Console.WriteLine(String.Join(", ", result));
            Console.ReadKey();
        }

        private int[] sort(int[] inputValues) {
            // Create buckets
            int k = inputValues.Max();
            List<int>[] buckets = new List<int>[k];
            for (int i = 0; i < buckets.Length; i++) buckets[i] = new List<int>();
            // Push items to buckets
            foreach (int item in inputValues) {
                for(int m = 0; m < buckets.Length; m++) {
                    if (m + 1 == item) {
                        buckets[m].Add(item);
                        break;
                    }
                }
            }
            // Print buckets
            if(PRINT_BUCKETS) {
                for (int n = 1; n <= buckets.Length; n++) {
                    Console.WriteLine("Bucket no." + n + ": " + String.Join(", ", buckets[n -1]));
                }
            }
            // Concat to inputValues in the right order
            Array.Clear(inputValues, 0, inputValues.Length);
            int j = 0;
            foreach(List<int> bucket in buckets) {
                foreach (int item in bucket) {
                    inputValues[j] = item;
                    j++;
                }
            }
            return inputValues;
        }
    }
}