export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;
  
    if (trueOrFalse) {
      var innerTask = true;   // Use a different variable name
      var innerTask2 = false; // Use a different variable name
    }
  
    return [task, task2];
  }
  