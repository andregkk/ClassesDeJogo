
class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    getAtaque() {
        var ataque;
        switch (this.tipo) {
            case 'Mago':
                ataque = 'Magia';
                break;
            case 'Guerreiro':
                ataque = 'Espada';
                break;
            case 'Monge':
                ataque = 'Artes Marciais';
                break;
            case 'Elfo':
                ataque = 'Flechas';
                break;    
            default:
                ataque = 'INVÁLIDO';
                break;
        }
        return ataque;
    }

    atacar() {
        var ataque = this.getAtaque();
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Aragorn',35,'Guerreiro');
const heroi2 = new Heroi('Gandalf',113,'Mago');
const heroi3 = new Heroi('Legolas',200,'Elfo');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();