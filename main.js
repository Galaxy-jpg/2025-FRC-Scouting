function submit() {
  gatherValues();

  listedValues = "";
  for (let i = 0; i < values.length; i++) {
    listedValues += values[i] + ";";
  }
  genQR(listedValues);
  console.log(listedValues);
}

function increase(section, number) {
  document.getElementById(section).elements[number].stepUp();
}

function decrease(section, number) {
  document.getElementById(section).elements[number].stepDown();
}
