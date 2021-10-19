// initiating the strict mode
"use strict";

// saving the toggle button, menu list, overlay dom elements
const toggleButton = document.querySelector(".toggle");
const menu = document.querySelector(".menu-modal");
const overlay = document.querySelector(".overlay");

// adding an event listener to the toggle button
toggleButton.addEventListener("click", function () {
  if (
    menu.classList.contains("hidden") ||
    !pledgePage.classList.contains("hide")
  ) {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
    toggleButton.className = "fas fa-times toggle";
    pledgePage.classList.add("hide");
  } else {
    menu.classList.add("hidden");
    overlay.classList.add("hidden");
    toggleButton.className = "fas fa-bars toggle";
  }
});

// creating a function for the bookmark button
// ceating and storing variables of the bookmark button, path1 and path2 of the svg in the button
const btn = document.getElementById("btn");
const pathOne = document.getElementById("path1");
const pathTwo = document.getElementById("path2");
const bookmarkBtnText = document.querySelector(".bookmarkbtn-text");

// adding a click function to the bookmark button to toggle its styling
btn.addEventListener("click", function () {
  if (!pathOne.classList.contains("active-path1")) {
    pathOne.classList.add("active-path1");
    pathTwo.classList.add("active-path2");
    bookmarkBtnText.textContent = "Bookmarked";
    bookmarkBtnText.classList.add("bookmarkbtn-text-active");
  } else {
    pathOne.classList.remove("active-path1");
    pathTwo.classList.remove("active-path2");
    bookmarkBtnText.classList.remove("bookmarkbtn-text-active");
    bookmarkBtnText.textContent = "Bookmark";
  }
});

// adding functionalities to the back this project button
// creating storing the .back-this-project-modal and  backproject-btn dom elements
const pledgePage = document.querySelector(".back-this-project-modal");
const backProjectButton = document.getElementById("backproject-btn");
// adding an event listerner to the back project btn
backProjectButton.addEventListener("click", function () {
  if (pledgePage.classList.contains("hide")) {
    pledgePage.classList.remove("hide");
    overlay.classList.remove("hidden");
  }
});

// adding function to the exit button in the back this project page
// creating and storing  a variable holding the exit btn dom element in the back this project modal
const exitPledgePageBtn = document.querySelector(".exit");
// adding an event listerner to the exit btn

exitPledgePageBtn.addEventListener("click", function () {
  pledgePage.classList.add("hide");
  overlay.classList.add("hidden");
  // looping through all the checkboxes to uncheck and restore to default when the exit btn is clicked
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = false;
    offersModal[i].classList.remove("border-color");
    moneyPledgeDiv[i].classList.add("hide");
  }
});

// adding functions to the  checkbox

// storing all the dom elements of the checkbox,back this project modal(offer modal) and enter pledge box dom elements
const checkBox = document.querySelectorAll(".click-box");
const offersModal = document.querySelectorAll(".offers-modal");
const moneyPledgeDiv = document.querySelectorAll(".enter-pledge");
// console.log(checkBox);
// console.log(checkBox.length);

// creating a loop to loop through the array of checkbox dom elements to add a general functions to all of them
for (let i = 0; i < checkBox.length; i++) {
  let check = checkBox[i];
  console.log(check);
  check.addEventListener("click", function () {
    offersModal[i].classList.toggle("border-color");
    moneyPledgeDiv[i].classList.toggle("hide");
  });
}

// adding a function to the free pledge continue btn
// increasing backer number when a non-fund contributor backs the project
// storing variables containing the free pledge, first offer modal
// ,enter pledge box and first checkbox dom elements
const freePledgeBtn = document.getElementById("free-pledge");
const offersModal1 = document.querySelector(".offers-modal1");
const moneyPledgeDiv1 = document.querySelector(".enter-pledge1");
const checkBox1 = document.getElementById("checkbox");
// storing  a variable containing the backers number dom element
let backers = document.querySelector(".number-contributed").textContent;
//storing a variable containing the free pledge input number form
let freePledgeMoney = document.querySelector(".free-pledge-money");
// storing a variable containing the money contributed dom element
let money = document.querySelector(".money").textContent;
//storing a variable containing the progrss bar dom elements
const contributorsProgressBar = document.getElementById("myBar");
// storing the percent variable  that will contain a percentage value that will always be
// calc to increase and update the length of the progress bar
let percent;
//storing the success modal dom element
const successModal = document.querySelector(".success-modal");
// coverting the backers no to number type
backers = Number(backers);
// converting the money dom textcontent to the number type
money = Number(money);

//adding a function to the continue button in the free pledge box
freePledgeBtn.addEventListener("click", function () {
  // calling the calcPercentage function to calculate and update the percentage and width of the progress bar
  calcPercentage(freePledgeMoney);
  // calling a function to restore the offer modals in the back this project modal to default states
  restoreToDefault(checkBox1, offersModal1, moneyPledgeDiv1, freePledgeMoney);
  //  opens up the success modal
  successModal.classList.toggle("not-active");
});

// increasing backer number and money when a funded contributor backs the project
// storing the all continue btn for paid pledge, all input number forms in the paid pledge
//  all spots left in the main page and spots left in the modal
const paidPledgeBtn = document.querySelectorAll(".paidpledge");
const inputPledgeForm = document.querySelectorAll(".num");
let spaceLeft = document.querySelectorAll(".spots-left");
const spaceLeftModal = document.querySelectorAll(".spots-left-modal");
console.log(spaceLeft[1].textContent);
// creating variables to store and update the spots left in both main and modal
let renewSpots;
let renewSpotsModal;
// looping through the continue buttons in the paid pledge section to add functions to them
for (let i = 0; i < paidPledgeBtn.length; i++) {
  // adding event listerner to each button in the loop
  paidPledgeBtn[i].addEventListener("click", function () {
    // calling the calcPercentage function to calculate and update the percentage and width of the progress bar
    calcPercentage(inputPledgeForm[i]);
    //retrieving and calculating spots left in main
    renewSpots = Number(spaceLeft[i].textContent);
    renewSpots -= 1;
    //updating spots left in main
    spaceLeft[i].textContent = renewSpots;
    //retrieving and calculating spots left in modal
    renewSpotsModal = Number(spaceLeftModal[i].textContent);
    renewSpotsModal -= 1;
    //updating spots left in modal
    spaceLeftModal[i].textContent = renewSpotsModal;
    // calling a function to restore the offer modals in the back this project modal to default states
    restoreToDefault(
      checkBox[i + 1],
      offersModal[i + 1],
      moneyPledgeDiv[i + 1],
      inputPledgeForm[i]
    );
    //  opens up the success modal
    successModal.classList.toggle("not-active");
    // scrolls smoothly to the top of the window
    window.scrollTo({ top: 50, behavior: "smooth" });
  });
}

// storing the got it button dom element on the success modal in a variable
const successModalBtn = document.querySelector(".got-it");
// adding an event listerner to the got it button on the success modal
successModalBtn.addEventListener("click", function () {
  successModal.classList.toggle("not-active");
  overlay.classList.add("hidden");
});

// clicking on the select reward buttons to open back this project modal
// storing a variable containing the select reward btn dom element
const selectReward = document.querySelectorAll(".select-reward");
// creating a lopp to go through the buttons of the select reward to bring up the back this project modal
for (let i = 0; i < selectReward.length; i++) {
  selectReward[i].addEventListener("click", function () {
    if (pledgePage.classList.contains("hide")) {
      pledgePage.classList.remove("hide");
      overlay.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// function for calculating the percentage and updating the progress bar
function calcPercentage(inputPledgeForm) {
  //  increasing the money contributed from the input form
  money += Number(inputPledgeForm.value);
  //updating the money pledged
  document.querySelector(".money").textContent = money;
  // increasing no of backers
  backers += 1;
  //updating the backers
  document.querySelector(".number-contributed").textContent = backers;
  console.log(backers);
  //calculating the percentage
  percent = Math.trunc((money / 100000) * 100) + 1;
  // updating the width of the progress bar based on calculated percent
  if (percent <= 100) {
    console.log(`percent:${percent}`);
    contributorsProgressBar.style.width = `${percent}%`;
  } else if (percent >= 100) {
    contributorsProgressBar.style.width = "100%";
    contributorsProgressBar.style.backgroundColor = "rgb(17, 49, 44)";
  }
}
// function torestore the checkbox to default
function restoreToDefault(checkbox, offersModal, moneyPledgeDiv, freePledge) {
  // unchecking the box when clicked
  checkbox.checked = false;
  // changing the offer modal border
  offersModal.classList.toggle("border-color");
  // changing the moneypledge div display
  moneyPledgeDiv.classList.toggle("hide");
  // changing the pledge page div display
  pledgePage.classList.add("hide");
  // restoring value of input number form to 0
  freePledge.value = "0";
}
