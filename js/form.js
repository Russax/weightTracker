const formContainer = document.querySelector(".form");

const submitBTN = document.querySelector("#signup");

class formHandler
{
   constructor(username, email, password)
   {
      this.username = username;
      this.email = email;
      this.password = password;
   }

   static validate()
   {
      username = this.username;
      email = this.email;
      password = this.password;


   }

   register()
   {

   }
}

class UI
{
   static renderFormFeedback(msg, status, pos)
   {
      // status': error, success
      const label = document.createElement("label");
      label.className = `alert alert-${status}`;
      label.textContent = msg;

      const mainContainer = document.querySelector("#main-container");
      const formGroups = document.querySelectorAll(".form-group");

      mainContainer.insertBefore(label, formGroups[pos]);
   }
}

submitBTN.addEventListener("click", function(e) {
   e.preventDefault();

   const f_username = document.querySelector("#username").value;
   const f_email = document.querySelector("#email").value;
   const f_password = document.querySelector("#password").value;

   const user = new formHandler(f_username, f_email, f_password);

   formHandler.validate();
});