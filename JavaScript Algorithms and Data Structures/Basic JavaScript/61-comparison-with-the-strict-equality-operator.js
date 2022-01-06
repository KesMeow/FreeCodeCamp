// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

// == Converts values for comparison to common type while === doesn't convert, just compare raw so if the type doesn't match, it will return false.
