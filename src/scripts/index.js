window.addEventListener("DOMContentLoaded", (event) => {
  formSubmit();
  function formSubmit() {
    const form = document.querySelector(".form");
    if (form) {
      const peselRegex = new RegExp("^d{11}$");
      let errors = form.querySelector(".form__errors");
      form.addEventListener("submit", function (e) {
        let firstName = form.querySelector("#first-name").value;
        let lastName = form.querySelector("#last-name").value.trim();
        let pesel = form.querySelector("#pesel").value.trim();
        let phone = form.querySelector("#phone").value.trim();
        let password = form.querySelector("#password").value.trim();
        let messages = [];
        errors.innerHTML = "";
        e.preventDefault();

        if (firstName === "" || firstName === null) {
          messages.push("First name is required");
        }
        if (lastName === "" || lastName === null) {
          messages.push("Last name is required");
        }
        if (pesel === "" || pesel === null) {
          messages.push("PESEL is required");
        } else if (pesel.length !== 11) {
          messages.push("invalid PESEL length");
        }
        if (phone === "" || phone === null) {
          messages.push("Phone is required");
        }
        if (password === "" || password === null) {
          messages.push("Password is required");
        } else if (password.length < 6) {
          messages.push("Password is too short");
        } else if (password.length > 30) {
          messages.push("Password is too long");
        }
        messages.forEach((message) => {
          const paragraph = document.createElement("p");
          paragraph.innerHTML = message;
          errors.appendChild(paragraph);
        });
      });
    }
  }
});
