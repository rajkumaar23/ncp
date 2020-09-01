function validateDate() {
  const regex = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/gm;
  const feedbackElement = document.getElementById("dateFeedback");
  feedbackElement.className = ""
  if (!regex.test(document.getElementById("dateInput").value)) {
    feedbackElement.className = "help is-danger";
    feedbackElement.textContent =
      "Please enter the date in the format DD-MM-YYYY";
  } else {
    feedbackElement.className = "help is-success";
    feedbackElement.textContent = "The date format is valid";
  }
}
