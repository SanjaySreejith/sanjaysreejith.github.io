document
  .querySelectorAll(".btn-primary")
  .forEach(button => {
      button.addEventListener("click", () => {
          gtag("event", "join_button_click");
      });
  });