// code your solution here
// Function declaration for saturdayFun with default activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression for mondayWork with default activity
  let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function that returns a function which wraps an adjective in a highlight
  function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
 
