function myReplace(str, before, after) {
    let beforeCap = before[0].toUpperCase() + before.substring(1);
    let ogWordUpper = str.indexOf(beforeCap);
  
    if (ogWordUpper != -1) {
      return str.replace(beforeCap, (after[0].toUpperCase() + after.substring(1)));
    } else {
      return str.replace(before.toLowerCase(), after.toLowerCase())
    }
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");n