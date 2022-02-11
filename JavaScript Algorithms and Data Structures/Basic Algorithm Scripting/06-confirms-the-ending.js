function confirmEnding(str, target) {
    let len = target.length;
    let strlen = str.length;
    if (str.substring(strlen - len, strlen) == target) {
      return true;
    }
    return false;
  }
  
  confirmEnding("Bastian", "n");