const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let result= record.find(teamRecord => {
    teamRecord.result === "w";
  }); 
    return !!result? record.result : undefined;
}