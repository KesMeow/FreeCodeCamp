function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    return str.split("").map(x => [x, pairs[x]]);
  }
  
  console.log(pairElement("GCG"));
  pairElement("GCG");