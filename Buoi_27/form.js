document.addEventListener("DOMContentLoaded", function () {
    function handleBlur(event) {
      const input = event.target;
      const value = input.value.trim();
  
      if (!value) {
        input.style.borderColor = "red";
  
        let errorMessage = input.parentNode.querySelector(".error-message");
        if (!errorMessage) {
          errorMessage = document.createElement("div");
          errorMessage.className = "error-message";
          errorMessage.innerHTML = "<i>Vui lòng nhập thông tin</i>";
          errorMessage.style.position = "absolute";
          errorMessage.style.color = "#CD3038";
          errorMessage.style.fontSize = "14px";
          errorMessage.style.top = `${
            input.offsetTop + input.offsetHeight + 5
          }px`;
          errorMessage.style.left = `${input.offsetLeft}px`;
  
          input.parentNode.appendChild(errorMessage);
        }
      }
    }
  
    function handleFocus(event) {
      const input = event.target;
      input.style.borderColor = "";
  
      let errorMessage = input.parentNode.querySelector(".error-message");
      if (errorMessage) {
        input.parentNode.removeChild(errorMessage);
      }
    }
  
    function clearErrors() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(function (errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
      });
  
      const inputs = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"]'
      );
      inputs.forEach(function (input) {
        input.style.borderColor = "";
      });
    }
  
    function handleFormSubmit(event) {
      const tabContainer = event.target.closest(".tab");
      const inputs = tabContainer.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"]'
      );
      let hasError = false;
  
      inputs.forEach(function (input) {
        const value = input.value.trim();
  
        if (!value) {
          input.style.borderColor = "red";
          let errorMessage = input.parentNode.querySelector(".error-message");
          if (!errorMessage) {
            errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "Vui lòng nhập thông tin";
            errorMessage.style.position = "absolute";
            errorMessage.style.color = "red";
            errorMessage.style.fontSize = "12px";
            errorMessage.style.top = `${
              input.offsetTop + input.offsetHeight + 5
            }px`;
            errorMessage.style.left = `${input.offsetLeft}px`;
  
            input.parentNode.appendChild(errorMessage);
          }
  
          hasError = true;
        }
      });
  
      if (hasError) {
        event.preventDefault();
      }
    }
  
    const inputs = document.querySelectorAll(
      'input[type="text"], input[type="email"], input[type="password"]'
    );
  
    inputs.forEach(function (input) {
      input.addEventListener("blur", handleBlur);
      input.addEventListener("focus", handleFocus);
    });
  
    const tabRadios = document.querySelectorAll('input[name="tab-choose"]');
    tabRadios.forEach(function (radio) {
      radio.addEventListener("change", clearErrors);
    });
  
    const loginButton = document.querySelector(".btn-login");
    if (loginButton) {
      loginButton.addEventListener("click", handleFormSubmit);
    }
  
    const registerButton = document.querySelector(".btn-register");
    if (registerButton) {
      registerButton.addEventListener("click", handleFormSubmit);
    }
  });
  