window.addEventListener("DOMContentLoaded", (event) => {
  
  const formSubmit = () => {
    const form = document.querySelector(".form");
    const phoneRegex = /[a-zA-Z]/g;
    if (form) {
      const errors = form.querySelector(".form__errors");
      form.addEventListener("submit", e => {
        e.preventDefault();
        const firstName = form.querySelector("#first-name").value.trim();
        const lastName = form.querySelector("#last-name").value.trim();
        const pesel = form.querySelector("#pesel").value.trim();
        const phoneCode = form.querySelector("#phone-codes").value;
        const phone = form.querySelector("#phone").value.trim();
        const password = form.querySelector("#password").value.trim();
        const messages = [];
        errors.innerHTML = "";
        if (!firstName) {
          messages.push("First name is required");
        }
        if (!lastName) {
          messages.push("Last name is required");
        }
        if (!pesel) {
          messages.push("PESEL is required");
        } else if (pesel.length !== 11) {
          messages.push("invalid PESEL length");
        }
        if (!phone) {
          messages.push("Phone is required");
        } else if (phoneRegex.test(phone)) {
          messages.push("Invalid phone number");
        }

        if (!password) {
          messages.push("Password is required");
        } else if (password.length < 6) {
          messages.push("Password is too short");
        } else if (password.length > 30) {
          messages.push("Password is too long");
        }
        messages.forEach((message) => {
          const paragraph = document.createElement("li");
          paragraph.textContent = message;
          errors.appendChild(paragraph);
        });
        if (!messages.length) {
          alert(`
            First name: ${firstName}, 
            last name: ${lastName}, 
            PESEL: ${pesel}, 
            phone: ${phoneCode} ${phone}, 
            password: ${password}`);
        }
      });
    }
  };
  formSubmit();
});
