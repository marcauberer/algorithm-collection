#![allow(non_snake_case)]

use std::io::{stdin, stdout, Read, Write};

const PRINT_STEPS: bool = true;

fn sort(inputList: &[i32]) -> &[i32] {
    return inputList;
}

fn pause() {
    let mut stdout = stdout();
    stdout.write(b"Press Enter to continue...").unwrap();
    stdout.flush().unwrap();
    stdin().read(&mut [0]).unwrap();
}

fn main() {
    let inputList: [i32; 7] = [6, 1, 5, 1, 3, 9, 4];
    println!("{:?}", inputList);
    pause();
}