class Personagem {
    constructor(nome, vida, poder) {
      this.nome = nome;
      this.vida = vida;
      this.poder = poder;
    }
  
    atacar() {
      console.log(`${this.nome} está atacando com ${this.poder} de poder!`);
    }
  
    receberDano(dano) {
      this.vida -= dano;
      console.log(`${this.nome} recebeu ${dano} de dano e agora tem ${this.vida} de vida.`);
    }
  
    mostrarInfo() {
      return `${this.nome} - Vida: ${this.vida}, Poder: ${this.poder}`;
    }
  }
  
  class Guerreiro extends Personagem {
    constructor(nome) {
      super(nome, 150, 30);
    }
  
    atacar() {
      console.log(`${this.nome}, o Guerreiro, ataca com sua espada causando ${this.poder} de dano físico!`);
    }
  }
  
  class Mago extends Personagem {
    constructor(nome) {
      super(nome, 100, 50);
    }
  
    atacar() {
      console.log(`${this.nome}, o Mago, lança um feitiço mágico causando ${this.poder} de dano mágico!`);
    }
  
    curar() {
      this.vida += 20;
      console.log(`${this.nome} se curou e agora tem ${this.vida} de vida.`);
    }
  }
  
  class Arqueiro extends Personagem {
    constructor(nome) {
      super(nome, 120, 40);
    }
  
    atacar() {
      console.log(`${this.nome}, o Arqueiro, atira uma flecha causando ${this.poder} de dano à distância!`);
    }
  
    esquivar() {
      console.log(`${this.nome} se esquivou de um ataque com agilidade!`);
    }
  }
  
  const guerreiro = new Guerreiro("Thor");
  const mago = new Mago("Gandalf");
  const arqueiro = new Arqueiro("Legolas");
  
  console.log(guerreiro.mostrarInfo());
  guerreiro.atacar(); 
  
  console.log(mago.mostrarInfo());
  mago.atacar();  
  mago.curar();
  
  console.log(arqueiro.mostrarInfo());
  arqueiro.atacar(); 
  arqueiro.esquivar();
  