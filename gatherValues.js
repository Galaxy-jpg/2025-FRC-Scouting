function gatherValues() {
  values = [];
  values.push(document.getElementById("teamInfo").elements.teamNumber.value);
  values.push(document.getElementById("teamInfo").elements.matchNumber.value);
  values.push(document.getElementById("auto").elements.leaveStart.checked);
  values.push(document.getElementById("auto").elements.level1Auto.value);
  values.push(document.getElementById("auto").elements.level2Auto.value);
  values.push(document.getElementById("auto").elements.level3Auto.value);
  values.push(document.getElementById("auto").elements.level4Auto.value);
  values.push(document.getElementById("auto").elements.processorAuto.value);
  values.push(document.getElementById("auto").elements.netAuto.value);
  values.push(document.getElementById("telop").elements.level1Telop.value);
  values.push(document.getElementById("telop").elements.level2Telop.value);
  values.push(document.getElementById("telop").elements.level3Telop.value);
  values.push(document.getElementById("telop").elements.level4Telop.value);
  values.push(document.getElementById("telop").elements.processorTelop.value);
  values.push(document.getElementById("telop").elements.netTelop.value);
  values.push(document.getElementById("end").elements.endGame[0].checked); 
  values.push(document.getElementById("end").elements.endGame[1].checked);
  values.push(document.getElementById("end").elements.endGame[2].checked);
  values.push(document.getElementById("end").elements.endGame[3].checked);
  console.log(values);
}
