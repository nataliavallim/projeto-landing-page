const form = document.getElementById("my-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const emailInput = document.getElementById("email");

if (emailInput.value === "") {
  alert("O campo de e-mail é obrigatório!");
} else {
  alert("Formulário enviado com sucesso");
}
