function findLongestWordLength(str) {
    let strArray=str.split(' ');
    let max=0;
    for(let i=0;i< strArray.length;i++){
      if(strArray[i].length>max)
        max=strArray[i].length;
    }

findLongestWordLength("The quick brown fox jumped over the lazy dog");