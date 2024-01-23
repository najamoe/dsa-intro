//Enables a stricter set of rules and error-checking
//forbiding the use of undeclared variables, so a variable must be declared before they can be used
"use strict";

window.addEventListener("DOMContentLoaded", start);

//Main function that starts the interaction
function start() {
  console.log("JavaScript kører");
  hideAll();
  askAboutName();
}
// function to hide all form elements
function hideAll() {
  document.querySelector("#ask-name").classList.add("hide");
  document.querySelector("#ask-age").classList.add("hide");
  document.querySelector("#ask-birthyear").classList.add("hide");
  document.querySelector("#success").classList.add("hide");
  document.querySelector("#failure").classList.add("hide");
}

// function to fill in fields with specific data (Data the user inputs)
function fillInFields(fieldname, value) {
  //Finds all the elements with data-field attributes and updates the content. 
  //e.g  fillInFields("firstname", firstname) --> "firstname" is the data-field with a value of firstname
  //forEach iterates over the selected elements
  document.querySelectorAll(`[data-field=${fieldname}]`).forEach(element => (element.textContent = value));
}


function askAboutName() {
  // Get the form element
  const form = document.querySelector("#ask-name");
  //add an event listener for form submission
  form.addEventListener("submit", answeredName);
  //show the form, previously hidden in function hideAll()
  form.classList.remove("hide");
}

//Function for when the user has answered their name
function answeredName(event) { 
    //Prevents the default behavior of an event
  //In form submissions the default behavior is so submit form and reload page
  event.preventDefault();

  //Get the form element
  const form = event.target;
  //Disabling the submit button
  form.removeEventListener("submit", answeredName);
  form.querySelector("button").disabled = true;

  //Retrieving the entered name
  const firstname = form.firstname.value;
  //loggin the answered name
  console.log("Answered name: " + firstname);
  // Updating the content of HTML elements with the data-field "firstname"
  fillInFields("firstname", firstname);
  //Starts the function askAboutAge()
  askAboutAge();
}

function askAboutAge() {
  // Get the form element
  const form = document.querySelector("#ask-age");
  //add an event listener for form submission
  form.addEventListener("submit", answeredAge);
  //show the form, previously hidden in function hideAll()
  form.classList.remove("hide");
}

function answeredAge(event) {
  //Prevents the default behavior of an event
  //In form submissions the default behavior is so submit form and reload page
  event.preventDefault();
  //Get the form element
  const form = event.target;
  //Disabling the submit button
  form.removeEventListener("submit", answeredAge);
  form.querySelector("button").disabled = true;
 //Retrieving the entered age
  const age = form.age.valueAsNumber;
  //Loggin the answered age
  console.log("Answered age: " + age);
  //Updating the content of HTML elements with the data-field "age"
  fillInFields("age", age);
  //Starts the function askAboutBirthYear()
  askAboutBirthYear(age);
}

function askAboutBirthYear(age) {
  // calculate birthyear - expect that the person HASN'T had their birthday yet this year
  const birthyear = 2024 - 1 - age;

  //Updating the content of HTML elements with the data-field "birthyear"
  fillInFields("birthyear", birthyear);

  //Get the form element
  const form = document.querySelector("#ask-birthyear");
  //add an event listener for form submission
  form.addEventListener("submit", answeredBirthyear);
  //show the form, previously hidden in function hideAll()
  form.classList.remove("hide");
}

function answeredBirthyear(event) {
    //Prevents the default behavior of an event
  //In form submissions the default behavior is so submit form and reload page
  event.preventDefault();
  //Get the form element
  const form = event.target;
  //Disabling the submit button
  form.removeEventListener("submit", answeredBirthyear);
  form.querySelector("button").disabled = true;
  // retrieving the calculated birthYear
  const correct = form.correct.value;
  //Loggin the answer
  console.log("Answered correct: " + correct);

  if (correct === "yes") {
    showSuccess();
  } else {
    showFailure();
  }
}
//show the form, previously hidden in function hideAll()
function showSuccess() {
  document.querySelector("#success").classList.remove("hide");
}
//show the form, previously hidden in function hideAll()
function showFailure() {
  document.querySelector("#failure").classList.remove("hide");
}
