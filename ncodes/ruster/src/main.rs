fn main() {
    const_var_types();
    control_flow();
    function(0);
    ownership();
    _string();
    reference_borrowing();
    _slice();
}

// 1. 常量 变量 基本类型
fn const_var_types() {
    // 常量 变量
    let _constant_variable = 0;
    let mut _mutable_variable = 0;
    _mutable_variable = 1;

    // 基本类型
    let _int_8: i8;
    let _int_16: i16 = 0b1_000;
    let _int_32: i32 = 0o7_000;
    let _int_64: i64 = 0x15_000;
    let _uint_128: u128 = 0x15_000_000;
    let _isize: isize = 0x15_000;
    let _byte: u8 = b'A';

    let _float_32: f32 = 1.0e-23;
    let _float_64: f64 = 1.0e23;

    let mut _mut_bool: bool = true;
    _mut_bool = false;

    let _char = '😻';

    // Tuple
    let _tuple: (i32, f64, u8) = (500, 6.4, 1);
    let (_tuple_1, _tuple_2, _tuple_3) = _tuple;
    let _tuple_idx_0 = _tuple.0;

    // Array
    let _array: [i32; 5] = [1, 2, 3, 4, 5];
    let _array_repeat = [3; 5];
    let _array_first = _array[0];
}

// 2. 函数
fn function(x: i32) -> i32 {
    let y = {
        let z = 3;
        x + z
    };
    y + 1
}

// 3 控制结构
fn control_flow() {
    // 条件
    let condition = true;
    let number = if condition { 5 } else { 6 };
    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    // 循环
    let mut counter = 0;
    let result = loop {
        // loop
        counter += 1;
        if counter == 10 {
            break counter * 2;
        }
    };
    println!("The result is {}", result);

    let mut number = 3;
    while number != 0 {
        // while
        println!("{}!", number);
        number -= 1;
    }

    let a = [10, 20, 30, 40, 50];
    for element in a.iter() {
        // for
        println!("the value is: {}", element);
    }

    for number in (1..4).rev() {
        println!("{}!", number);
    }
}

// 4 所有权
fn ownership() {
    let x = 5;
    let y = x;
    println!("{}", x);
    println!("{}", y);
    let s1 = String::from("hello");
    let s2 = s1;
    // println!("{}, world!", s1); // s1 不在拥有对象所有权
    let s3 = s2.clone(); // 复制堆内存 不夺取所有权
    println!("s2 = {}, s3 = {}", s2, s3);
}

// 引用借用
fn reference_borrowing() {
    // 常引用
    fn calculate_length(s: &String) -> usize {
        s.len()
    }
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);

    // 可变引用
    fn change(some_string: &mut String) {
        some_string.push_str(", world");
    }
    let mut s = String::from("hello");
    change(&mut s);

    // 可变引用数小于或等于 1
    let mut s = String::from("hello");
    let _r1 = &mut s;
    // let r2 = &mut s;

    // 可变引用数突破 1
    let mut s = String::from("hello");
    {
        let _r1 = &mut s;
    }
    let _r2 = &mut s;

    // 不允许混合引用
    let mut _s = String::from("hello");
    let _r1 = &_s; // no problem
    let _r2 = &_s; // no problem
                   // let r3 = &mut s; // 错误

    // 不允许悬垂引用
    // fn dangle() -> &String {
    // let s = String::from("hello");
    // &s
    // }
    // let reference_to_nothing = dangle();
}

// 5 字符串
fn _string() {
    let _s = String::from("hello");
    let mut _s = String::from("hello");
    _s.push_str(", world!"); // 附件进字符串
}

fn _slice() {
    fn first_word(s: &String) -> usize {
        let bytes = s.as_bytes();
        for (i, &item) in bytes.iter().enumerate() {
            if item == b' ' {
                return i;
            }
        }
        s.len()
    }

    let s = String::from("你好");
    let idx = first_word(&s);
    println!("{}", idx);
}
