function copyEmail() {
    navigator.clipboard
      .writeText("kathrine.lie15@gmail.com")
      .then(() => {
        const message = document.getElementById("copy-message");

        message.textContent = "Copied!";

        setTimeout(() => {
            message.textContent = "";
        }, 1500);
      })
      .catch(() => {
        const message = document.getElementById("copy-message");
        message.textContent = "Could not copy";

        setTimeout(() => {
            message.textContent = "";
        }, 1500);
      });
  }