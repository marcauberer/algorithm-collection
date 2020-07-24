////////// CAUTION: THIS ALGORITHM DOES NOT WORK CORRECTLY UP TO NOW //////////

#![allow(non_snake_case)]

use std::io::{stdin, stdout, Read, Write};
use rand::Rng;

extern crate rand;
const PRINT_PIVOT: bool = true;
const PRINT_PARTITION: bool = true;

fn sort(inputList: &mut [i32], l: usize, r: usize) -> &[i32] {
    if l < r {
        let q = partition(inputList, l, r);
        sort(inputList, l, q - 1);
        sort(inputList, q + 1, r);
    }
    return inputList;
}

fn partition(list: &mut [i32], l: usize, r: usize) -> usize {
    let z: usize = rand::thread_rng().gen_range(l, r + 1);
    if PRINT_PIVOT { println!("Pivot index: {}", z); }
    interchange(list, z, r);
    let p: i32 = list[r];
    let mut i: usize = l;
    for j in l..(r-1) {
        if list[j] <= p {
            interchange(list, i, j);
            i = i + 1;
        }
    }
    interchange(list, i + 1, r);
    if PRINT_PARTITION { println!("Partition: {:?}", list); }
    return i + 1;
}

fn interchange(list: &mut [i32], index1: usize, index2: usize) {
    // Switch around items of index1 and index2
    let tmp: i32 = list[index1];
    list[index1] = list[index2];
    list[index2] = tmp;
}

fn pause() {
    let mut stdout = stdout();
    stdout.write(b"Press Enter to continue...").unwrap();
    stdout.flush().unwrap();
    stdin().read(&mut [0]).unwrap();
}

fn main() {
    let mut inputList: [i32; 7] = [6, 1, 5, 1, 3, 9, 4];
    let l: usize = 0;
    let r: usize = inputList.len() - 1;
    sort(&mut inputList, l, r);
    println!("Result: {:?}", inputList);
    pause();
}