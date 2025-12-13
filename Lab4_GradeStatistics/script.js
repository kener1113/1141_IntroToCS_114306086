var mathInput = document.getElementById("mathInput");
var engInput = document.getElementById("engInput");
var submitBtn = document.getElementById("submitBtn");

var tbody = document.getElementById("tbody");
var mathAvgCell = document.getElementById("mathAvg");
var engAvgCell = document.getElementById("engAvg");
var overallAvgCell = document.getElementById("overallAvg");

var rows = [];

submitBtn.addEventListener("click", function () {
  var m = mathInput.value;
  var e = engInput.value;

  if (m === "" || e === "") {
    alert("Please enter both Math and English grades.");
    return;
  }

  var math = Number(m);
  var eng = Number(e);

  if (Number.isNaN(math) || Number.isNaN(eng)) {
    alert("Grades must be numbers.");
    return;
  }

  rows.push({ math: math, eng: eng });
  addRowToTable(rows.length, math, eng);

  updateColumnAverages();

  mathInput.value = "";
  engInput.value = "";
  mathInput.focus();
});

function addRowToTable(index, math, eng) {
  var avg = (math + eng) / 2;

  var tr = document.createElement("tr");

  var tdIndex = document.createElement("td");
  tdIndex.textContent = index;

  var tdMath = document.createElement("td");
  tdMath.textContent = format2(math);

  var tdEng = document.createElement("td");
  tdEng.textContent = format2(eng);

  var tdAvg = document.createElement("td");
  tdAvg.textContent = format2(avg);

  tr.appendChild(tdIndex);
  tr.appendChild(tdMath);
  tr.appendChild(tdEng);
  tr.appendChild(tdAvg);

  tbody.appendChild(tr);
}

function updateColumnAverages() {
  if (rows.length === 0) {
    mathAvgCell.textContent = "0.00";
    engAvgCell.textContent = "0.00";
    overallAvgCell.textContent = "0.00";
    return;
  }

  var sumMath = 0;
  var sumEng = 0;

  for (var i = 0; i < rows.length; i++) {
    sumMath += rows[i].math;
    sumEng += rows[i].eng;
  }

  var avgMath = sumMath / rows.length;
  var avgEng = sumEng / rows.length;
  var overall = (avgMath + avgEng) / 2;

  mathAvgCell.textContent = format2(avgMath);
  engAvgCell.textContent = format2(avgEng);
  overallAvgCell.textContent = format2(overall);
}

function format2(n) {
  return Number(n).toFixed(2);
}
