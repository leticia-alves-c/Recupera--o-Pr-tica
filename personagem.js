
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


