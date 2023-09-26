export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;
  
    if (trueOrFalse) {
      let task = true;   // I Use let instead of var in line 6
      let task2 = false; // I Use let instead of var in line 7
    }
  
    return [task, task2];
  }
  