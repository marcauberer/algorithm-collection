using System;

namespace Bucket_Sort {
    class Program {

        private int[] inputValues = new int[] { 6, 1, 5, 1, 3, 9, 4 };
        private bool PRINT_STEPS = true;

        static void Main(string[] args) {
            new Program();
        }

        private Program() {
            int[] result = sort(inputValues);
        }

        private int[] sort(int[] inputValues) {
            int[] buckets = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        }
    }
}