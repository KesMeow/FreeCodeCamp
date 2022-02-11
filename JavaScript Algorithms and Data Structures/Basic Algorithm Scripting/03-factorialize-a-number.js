function factorialize(num) {
    if (num == 0) {
      return 1;
    }
    let factorial = num;
    for (let n = num - 1; n > 0; --n) {
      factorial *= n;
    }
    return factorial;
  }
  
  factorialize(5);