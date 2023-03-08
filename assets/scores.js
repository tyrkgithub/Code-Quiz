let localStorageData = JSON.parse(localStorage.getItem("quiz_score"));

// CREATE TABLE USING STORAGE DATA
function getFromLocalStorage() {
  if (localStorageData != null) {
    let table = document.createElement("table");
    let tableRow = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerHTML = "Name";
    let th2 = document.createElement("th");
    th2.innerHTML = "Score";
    tableRow.append(th1, th2);
    table.append(tableRow);
    for (let i = 0; i < localStorageData.length; i++) {
      let tableRow = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = localStorageData[i].name;
      let td2 = document.createElement("td");
      td2.innerHTML = localStorageData[i].score;
      tableRow.append(td1, td2);
      table.append(tableRow);
    }
    document.getElementById("highscores").append(table);
  }
}

getFromLocalStorage();
