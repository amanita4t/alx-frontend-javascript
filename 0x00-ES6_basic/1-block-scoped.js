export default function taskBlock(trueOrFalse) {
    let task = false; // Use let instead of var
    const task2 = true; // Use const instead of var
  
    if (trueOrFalse) {
      task = true; // Update the existing 'task' variable (no need to use var/let/const here)
      const task2 = false; // Declare a new block-scoped 'task2' variable using const
    }
  
    return [task, task2];
  }
  