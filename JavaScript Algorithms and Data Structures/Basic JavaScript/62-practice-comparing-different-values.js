// Setup
function compareEquality(a, b) {
    if (a === b && typeof(a) == typeof(b)) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");