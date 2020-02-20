class Cartas{
  constructor(palos,valor=[],texto){
    this.palos=palos;
    this.valor=valor;
    this.texto=texto;
    
  }
}

class Palo{
  constructor(figura){
    this.figura=figura;
  }
}

class Baraja {
   palos = [new Palo("trebol"),new Palo("corazon Rojo"),new Palo("corazon Negro"),new Palo("brillo")];
     letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      Valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      mazo=[];
      mezclar() {
        this.mazo = this.mazo.sort(function () { return Math.random() - 0.5 });
        console.log(this.mazo)
    }
    crearBarajas() {
        this.palos.forEach(function (element1) {
            this.letras.forEach(function callback(element2, index2) {
                if (index2 == 0) {
                    this.mazo.push(new Carta(element1, [1, 11], element2))
                } else
                    if (index2 > 9) {
                        this.mazo.push(new Carta(element1, [10], element2))
                    } else {

                        this.mazo.push(new Carta(element1, index2, element2))
                    }
            }, this);
        }, this);
    }
}

class Juego extends Baraja {
  nuevaBaraja=[]
  contador=0;
  mezclar() {
    while (this.mazoEnOrden.length < 52) {
      let ale = Math.floor(Math.random() * (52));
      this.elemento = this.mazoEnOrden.find(element => element == ale)
      let condicion = (this.elemento == undefined) ? this.mazoEnOrden.push(ale) : ale;
  }
  
  for (let i = 0; i < this.mazo.length - 1; i++) {
      this.elemento = this.mazo[this.mazoEnOrden[i]]
      this.mazo[this.mazoEnOrden[i]] = this.mazo[i]
      this.mazo[i] = this.elemento;
  }
  return this.mazo   
  }
  validar() {
    

    let carta  = this.nuevaBaraja.reduce(
      function(antes, ahora) {
          if (typeof(antes) == 'object') {
              if (antes > 10) {
                  return antes[0] + ahora;
              } else {
       return antes[1] + ahora;
              }
          } else {
              return antes + ahora;
          }

      })

  if (carta == 21) {
      console.log('Ganadoooooor')
  } else if (carta < 21) {
      console.log('Pide una carta otra vez')
  } else if (carta > 21) {
      console.log('Perdiste intentalo de nuevo ')
  }
  console.log('el valor de la suma es'+ carta);
    
  }
}

