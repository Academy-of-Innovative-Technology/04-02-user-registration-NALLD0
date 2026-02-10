const form = document.querySelector("form");



const inputs = document.querySelectorAll("input");
const selectCountry = document.querySelector("select");
const aboutTextarea = document.querySelector("textarea");

const accountTypeRadios = document.querySelectorAll(
    `input[name ="accountType"]`
);

const noSavedUser = document.getElementById("noSavedUser");
const savedUserPanel = document.getElementById("savedUserPanel");

const savedFirstName = document.getElementById("savedFirstName");
const savedLastName = document.getElementById("savedLastName");
const savedEmail = document.getElementById("savedEmail");
const savedCountry = document.getElementById("savedCountry");
const savedAccountType = document.getElementById("savedAccountType");
const savedAbout = document.getElementById("savedAbout");


const loadUserBtn = document.getElementById("loadUserBtn");
const clearUserBtn = document.getElementById("clearUserBtn");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedAccountType = document.querySelector(
        `input[name="accountType"]:checked`
    );


    const user = {
        firstName: inputs[0].value,
        lastName: inputs[1].value,
        email: inputs[2].value,
        password: inputs[3].value,
        country: selectCountry.value,
        accountType: selectedAccountType
            ? selectedAccountType.nextElementSibling.textContent: "",
            about: aboutTextarea.value
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    displayUser(user);
});


    function displayUser(user) {
  savedFirstName.textContent = user.firstName;
  savedLastName.textContent = user.lastName;
  savedEmail.textContent = user.email;
  savedCountry.textContent = user.country;
  savedAccountType.textContent = user.accountType;
  savedAbout.textContent = user.about;

  noSavedUser.classList.add("d-none");
  savedUserPanel.classList.remove("d-none");
}



loadUserBtn.addEventListener("click", function () {
    const savedData = localStorage.getItem ("registeredUser");

    if (savedData) {
        const user = JSON.parse(savedData);
    displayUser(user);
    }
});

clearUserBtn.addEventListener("click", function () {
  localStorage.removeItem("registeredUser");

  savedUserPanel.classList.add("d-none");
  noSavedUser.classList.remove("d-none");
});

const savedData = localStorage.getItem("registeredUser");

if (savedData) {
    const user = JSON.parse(savedData);
    displayUser(user);
}