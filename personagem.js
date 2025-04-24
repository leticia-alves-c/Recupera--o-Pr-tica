
class Personagem {
    constructor(vida, força, mana) {
        this.vida = vida; 
        this.forca = força; 
        this.mana = mana;
    }

    atacar() {
        console.log(`O personagem atacou com força ${this.forca}`); 
    }

    usarMana(quantidade) {
        if (this.mana >= quantidade) {
            this.mana -= quantidade;
            console.log(`Usou ${quantidade} de mana.`); 
        } else {
            console.log("Mana insuficiente.");
        }
    }

    recuperarVida(quantidade) {
        this.vida += quantidade; 
        if (this.vida > 100) {
            this.vida = 100; 
        }
        console.log(`Recuperou ${quantidade} de vida. Vida atual: ${this.vida}`);
    }

    apresentar() {
        console.log(`Vida: ${this.vida}, Força: ${this.forca}, Mana: ${this.mana}`); 
    }
}

const meuPersonagem = new Personagem(100, 30, 20); 
console.log("Personagem criado:");
meuPersonagem.apresentar(); 

meuPersonagem.atacar(); 
meuPersonagem.usarMana(20); 
meuPersonagem.recuperarVida(30); 
meuPersonagem.apresentar(); 

  
  class Guerreiro extends Personagem {
    constructor(nome) {
      super(nome, 150, 30);
    }

    atacar() {
      console.log(`${this.nome}, o Guerreiro, ataca com espada causando ${this.poder} de dano!`);
    }
  }
  
  
  class Mago extends Personagem {
    constructor(nome) {
      super(nome, 100, 50);
    }
  
    atacar() {
      console.log(`${this.nome}, o Mago, lança um feitiço causando ${this.poder} de dano mágico!`);
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
      console.log(`${this.nome}, o Arqueiro, atira uma flecha causando ${this.poder} de dano!`);
    }
  
    esquivar() {
      console.log(`${this.nome} se esquivou de um ataque!`);
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
  