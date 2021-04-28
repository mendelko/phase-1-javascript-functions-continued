function saturdayFun(play="roller-skate") {
    return `This Saturday, I want to ${play}!`;
}

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highlight="*"){
    return function(status="special"){
    return `You are ${highlight}${status}${highlight}!`;
  }
}

// const encouragingPromptFunction = wrapAdjective()()