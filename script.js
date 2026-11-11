function Cadastrarproduto(){
let nome = document.getElementById("nomedoproduto").value;
  if(nome === ""){
    alert("digite o nome do produto!");
    return;
  }
  let preço = document.getElementById("preçoproduto").value;
  if(preço === ""){
    alert("digite o preço do produto!");
    return;
  }
  let quantidade = document.getElementById("quantidadeproduto").value;
  if(quantidade === ""){
    alert("digite a quantidade do produto");
    return;
  }
    let total = preço * quantidade;
  totalvendas += total;
  alert(" total das vendas: " + totalvendas);
    let lista = document.getElementById("listaprodutos")
    lista.innerHTML += "<p>" + " nome: " + nome + " preço: " + preço + " quantidade: " + quantidade + " total: " + total + " total das vendas: " + totalvendas+ "</p>";
  
}
let totalvendas = 0;
