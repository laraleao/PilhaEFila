let clientesArray = [
  {
    nome: "Bruno",
    idade: 21,
    genero: "Masculino",
    formaDePagamento: "Dinheiro",
    filme: "Titanic",
  },
  {
    nome: "Leandro",
    idade: 25,
    genero: "Masculino",
    formaDePagamento: "Dinheiro",
    filme: "Interestelar",
  },
  {
    nome: "Lara",
    idade: 18,
    genero: "Feminino",
    formaDePagamento: "Cartao",
    filme: "Titanic",
  },
  {
    nome: "Pedro",
    idade: 16,
    genero: "Masculino",
    formaDePagamento: "Cartao",
    filme: "Interestelar",
  },
  {
    nome: "Mikaella",
    idade: 20,
    genero: "Feminino",
    formaDePagamento: "Cartao",
    filme: "Titanic",
  },
];

function acompanhar() {
  var div = document.getElementById("acompanhar1");

  clientesArray.shift();
  console.log(clientesArray);

  var clientes = JSON.stringify(clientesArray);

  div.innerHTML = clientes;

  if (clientesArray.length === 0) {
    div.innerHTML = "Não há ninguém na fila.";
    return;
  }
}
