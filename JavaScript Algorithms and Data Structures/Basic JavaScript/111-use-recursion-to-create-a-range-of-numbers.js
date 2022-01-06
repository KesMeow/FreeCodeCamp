function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum];
    }
    const res = rangeOfNumbers(startNum + 1, endNum);
    res.unshift(startNum);
    return res;
  };
  
  console.log(rangeOfNumbers(1,5));