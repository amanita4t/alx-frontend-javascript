export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
   
  export function taskNext() {
    let combination = 'But sometimes let'; //i use let
    combination += getLast();
  
    return combination;
  }
