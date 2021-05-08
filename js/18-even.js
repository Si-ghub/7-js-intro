function even(a) {
    if (a % 2 === 0) {
    return true;
    }
    return false;
    }

    console.log(even(7), '->', false);
    console.log(even(70), '->', true);
    console.log(even(0), '->', true);
    console.log(even(1), '->', false);
    console.log(even(2), '->', true);