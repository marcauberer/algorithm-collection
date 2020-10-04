package com.chillibits;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    private static final String text = "abbbbacbabcaacacbcca";
    private static final String pattern = "ca";

    public static void main(String[] args) {
        // Char comparison
        long start = System.currentTimeMillis();
        Integer[] foundPositions = searchWithCharComparison(text, pattern);

        System.out.println("Found occurrences: " + Arrays.toString(foundPositions));
        System.out.println("Duration: " + (System.currentTimeMillis() - start) + " ms");

        // Text comparison
        start = System.currentTimeMillis();
        foundPositions = searchWithTextComparison(text, pattern);

        System.out.println("Found occurrences: " + Arrays.toString(foundPositions));
        System.out.println("Duration: " + (System.currentTimeMillis() - start) + " ms");
    }

    private static Integer[] searchWithCharComparison(String text, String pattern) {
        List<Integer> foundPositions = new ArrayList<>();

        outer:
        for(int posText = 0; posText <= text.length() - pattern.length(); posText++) {
            for(int posPattern = 0; posPattern < pattern.length(); posPattern++) {
                if(text.charAt(posText + posPattern) != pattern.charAt(posPattern)) {
                    // Char mismatch
                    continue outer;
                }
            }
            // Patter match
            foundPositions.add(posText);
        }

        return foundPositions.toArray(new Integer[0]);
    }

    private static Integer[] searchWithTextComparison(String text, String pattern) {
        List<Integer> foundPositions = new ArrayList<>();

        for(int posText = 0; posText <= text.length() - pattern.length(); posText++) {
            if(text.startsWith(pattern, posText)) foundPositions.add(posText);
        }

        return foundPositions.toArray(new Integer[0]);
    }
}