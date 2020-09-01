const maxLength = 70;
let tableOfContents = [];

function submitChapter() {
  const chapTitle = document.getElementById("chapTitle");
  const pageNo = document.getElementById("pageNo");
  if (chapTitle.value && pageNo.value) {
    addToTableOfContents(chapTitle.value, pageNo.value);
    chapTitle.value = "";
    pageNo.value = "";
  } else {
    alert("Please fill in both fields");
  }
}

function addToTableOfContents(chapTitle, pgNo) {
  tableOfContents.push(
    `${tableOfContents.length + 1}. ${generateIndex(chapTitle, pgNo)}`
  );
  document.getElementById(
    "indexTitle"
  ).textContent = `| ${tableOfContents.length} chapters`;
  if (tableOfContents.length >= 3) {
    document.getElementById("tableOfContents").innerHTML = tableOfContents.join(
      "<br/>"
    );
  }
}

function generateIndex(chapTitle, pgNo) {
  let dots = "";
  let i = 0;
  while (i <= maxLength - (chapTitle.length + pgNo.toString().length)) {
    dots += ".";
    i++;
  }
  return chapTitle + " " + dots + " " + pgNo;
}

// Autopopulating for testing
setTimeout(() => {
  addToTableOfContents("A gentle introduction", 1);
  addToTableOfContents("Introducing JavaScript", 39);
  addToTableOfContents("Control Statement", 77);
  addToTableOfContents("Functions", 113);
  addToTableOfContents("Writing interactive programs", 151);
  addToTableOfContents("Strings", 191);
  addToTableOfContents("Arrays", 231);
}, 1000);

function clearTable() {
  tableOfContents = [];
  document.getElementById("tableOfContents").innerHTML = "";
  document.getElementById("indexTitle").textContent = "";
}
