//Parte 1

class Automovel {
    constructor(nome, marca, modelo, paisOrigem) {
      this.nome = nome;
      this.marca = marca;
      this.modelo = modelo;
      this.paisOrigem = paisOrigem;
    }
  
    getAutomovel() {
      return this.Automovel;
    }
  }
  
  let lista = [
    new Automovel("Carro", "Ford", "2021", "EUA"),
    new Automovel("Carro", "Jeep", "2019", "EUA")
  ];
  
  for (let i = 0; i < lista.length; i++) {
    console.log(`Nome: ${lista[i].nome}  Marca: ${lista[i].marca}`);
  
    for (let chave in lista[i]) {
      console.log(chave);
    }
  }
  
  //Parte 2
  
  let auto = new Automovel("Moto", "Honda", "2017", "Japão");
  auto.cor = "Verde";
  delete auto.paisOrigem;
  
  for (let chave in auto) {
    console.log(chave, auto[chave]);
  }
  