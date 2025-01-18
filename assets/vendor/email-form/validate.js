document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".email-form");
  const loading = document.querySelector(".loading");
  const errorMessage = document.querySelector(".error-message");
  const sentMessage = document.querySelector(".sent-message");

  form.addEventListener("submit", async (e) => {
      e.preventDefault();
      loading.style.display = "block";
      errorMessage.style.display = "none";
      sentMessage.style.display = "none";

      const formData = new FormData(form);

      try {
          const response = await fetch(form.action, {
              method: form.method,
              headers: {
                  Accept: "application/json",
              },
              body: formData,
          });

          if (response.ok) {
              loading.style.display = "none";
              sentMessage.style.display = "block";
              form.reset(); // Reset the form
          } else {
              throw new Error("Failed to send the message.");
          }
      } catch (error) {
          loading.style.display = "none";
          errorMessage.style.display = "block";
          errorMessage.textContent = "There was an error sending your message. Please try again later.";
      }
  });
});