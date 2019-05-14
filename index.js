const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recor){
  let result= record.find(teamRecord => {
    teamRecord.result === "w";
  }); 
    return !!result? record.result : undefined;
}