class Automovel {
    constructor(nome, marca, modelo, paisOrigem, tipoCombustivel) {
      this.nome = nome;
      this.marca = marca;
      this.modelo = modelo;
      this.paisOrigem = paisOrigem;
      this.tipoCombustivel = tipoCombustivel;
    }
    getInfo() {
      return `O automovel é um ${this.nome} de marca ${this.marca}, 
      modelo ${this.modelo}, fabricado em ${this.paisOrigem}. 
      Combustivel tipo ${this.tipoCombustivel}`;
    }
  }
  class Carro extends Automovel {
    constructor(
      nome,
      marca,
      modelo,
      paisOrigem,
      tipoCombustivel,
      velocidadeMax,
      numeroRodas,
      temStep,
      ocupantes
    ) {
      super(nome, marca, modelo, paisOrigem, tipoCombustivel);
      this.velocidadeMax = velocidadeMax;
      this.numeroRodas = numeroRodas;
      this.temStep = temStep;
      this.ocupantes = ocupantes;
    }
    getCarInfo() {
      return `O Carro possui velocidade maxima de ${this.velocidadeMax}  
       possui ${this.numeroRodas} rodas e ${
        this.temStep ? "possui" : "não possui"
      }
       step. Comporta ${this.ocupantes} ocupantes.`;
    }
  }
  const carrinho = new Carro(
    "Uno",
    "Fiat",
    "modelo",
    "Brasil",
    "Flex",
    157,
    4,
    false,
    5
  );
  
  console.log(carrinho.getInfo(), carrinho.getCarInfo());
  
  class Moto extends Automovel {
    constructor(
      nome,
      marca,
      modelo,
      paisOrigem,
      tipoCombustivel,
      velocidadeMax,
      numeroRodas,
      ocupantes
    ) {
      super(nome, marca, modelo, paisOrigem, tipoCombustivel);
      this.velocidadeMax = velocidadeMax;
      this.numeroRodas = numeroRodas;
      this.ocupantes = ocupantes;
    }
  
    getMotoInfo() {
      return `A moto possui velocidade maxima de ${this.velocidadeMax} possui ${this.numeroRodas} rodas e ${this.ocupantes} vagas`;
    }
  }
  
  const motoca = new Moto(
    "moto",
    "marca",
    "honda",
    "Brasil",
    "Gasolina",
    140,
    2,
    2
  );
  console.log(motoca.getInfo(), motoca.getMotoInfo());
  