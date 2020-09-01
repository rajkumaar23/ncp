function generateTable() {
  const tableRows = document.getElementById("tableRows");
  const tableColumns = document.getElementById("tableColumns");
  const multiplicationTable = document.getElementById("multiplication-table");
  let content = "";
  if (tableRows.value && tableColumns.value) {
    for (let i = 1; i <= parseInt(tableRows.value); i++) {
      content += "<tr>";
      for (let j = 1; j <= parseInt(tableColumns.value); j++) {
        content += `<td>${i * j}</td>`;
      }
      content += "</tr>";
    }
    multiplicationTable.innerHTML = content
  } else {
    alert("Please fill in both fields");
  }
}
