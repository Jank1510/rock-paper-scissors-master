import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock-paper-scissors-master';

  eleccion: boolean = true
  proceso: boolean = false
  rules: boolean = false
  opacity!: string
  seleccion!: string
  clase!: string
  cargandoRespuesta!: boolean
  respuestaCargada!: boolean
  EleccionMaquinaClase!: string
  EleccionMaquinaIMG!: string
  MostrarResultado!: boolean
  resultadoJuego!: string
  disenoCapasUsuario!: string
  disenoCapaMaquina!: string
  score: number = 0

  mode1: boolean = true
  mode2: boolean = false

  gameMode() {
    if (this.mode1 === true) {
      this.mode1 = false
      this.mode2 = true
    } else {
      if (this.mode1 === false) {
        this.mode1 = true
        this.mode2 = false
      }
    }
  }
  closedRules() {
    this.opacity = 'opacityClosed'
    setTimeout(() => {
      this.rules = false
    }, 500);
  }
  openRules() {
    this.opacity = 'opacityOpen'
    this.rules = true
  }
  /*metodos de eleccion*/
  papel() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-paper.svg'
    this.clase = 'papel'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquina()
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'tijera') {
        this.resultadoJuego = 'YOU LOSE'
        this.disenoCapaMaquina = 'capasDiseño'
        this.score = this.score - 1

      } else {
        if (this.EleccionMaquinaClase === 'papel') {
          this.resultadoJuego = 'YOU TIED'
        } else {
          if (this.EleccionMaquinaClase === 'piedra') {
            this.resultadoJuego = 'YOU WIN'
            this.disenoCapasUsuario = 'capasDiseño'
            this.score = this.score + 1

          }
        }
      }
    }, 2500);
  }
  piedra() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-rock.svg'
    this.clase = 'piedra'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquina()
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'tijera') {
        this.resultadoJuego = 'YOU WIN'
        this.disenoCapasUsuario = 'capasDiseño'
        this.score = this.score + 1

      } else {
        if (this.EleccionMaquinaClase === 'papel') {
          this.resultadoJuego = 'YOU LOSE'
          this.disenoCapaMaquina = 'capasDiseño'
          this.score = this.score - 1

        } else {
          if (this.EleccionMaquinaClase === 'piedra') {
            this.resultadoJuego = 'YOU TIED'

          }
        }
      }
    }, 2500);
  }
  tijera() {
    this.eleccion = false
    this.proceso = true
    this.clase = 'tijera'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquina()
    this.seleccion = '../assets/icon-scissors.svg'
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'tijera') {
        this.resultadoJuego = 'YOU TIED'
      } else {
        if (this.EleccionMaquinaClase === 'papel') {
          this.resultadoJuego = 'YOU WIN'
          this.disenoCapasUsuario = 'capasDiseño'
          this.score = this.score + 1

        } else {
          if (this.EleccionMaquinaClase === 'piedra') {
            this.resultadoJuego = 'YOU LOSE'
            this.disenoCapaMaquina = 'capasDiseño'
            this.score = this.score - 1

          }
        }
      }
    }, 2500);
  }

  EleccionDeLaMaquina() {
    let min = 1
    let max = 3
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomValor = Math.floor(Math.random() * (max - min + 1)) + min; // El máximo y el mínimo son inclusivos.
    if (randomValor == 1) {
      setTimeout(() => {
        this.EleccionMaquinaClase = 'papel'
        this.EleccionMaquinaIMG = '../assets/icon-paper.svg'
        this.cargandoRespuesta = false
        this.respuestaCargada = true
      }, 1500);
    } else {
      if (randomValor == 2) {
        setTimeout(() => {
          this.EleccionMaquinaClase = 'piedra'
          this.EleccionMaquinaIMG = '../assets/icon-rock.svg'
          this.cargandoRespuesta = false
          this.respuestaCargada = true
        }, 1500);
      } else {
        if (randomValor == 3) {
          setTimeout(() => {
            this.EleccionMaquinaClase = 'tijera'
            this.EleccionMaquinaIMG = '../assets/icon-scissors.svg'
            this.cargandoRespuesta = false
            this.respuestaCargada = true
          }, 1500);
        }
      }
    }
  }
  PlayAgain() {
    this.proceso = false
    this.eleccion = true
    this.MostrarResultado = false
    this.cargandoRespuesta = false
    this.respuestaCargada = false
    this.disenoCapaMaquina = ''
    this.disenoCapasUsuario = ''
  }

  /*segundo modo de juego */
  papel2() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-paper.svg'
    this.clase = 'papel-2'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquinaMode2()
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'piedra-2' || this.EleccionMaquinaClase === 'spock-2') {
        this.resultadoJuego = 'YOU WIN'
        this.disenoCapasUsuario = 'capasDiseño'
        this.score = this.score + 1

      } else {
        if (this.EleccionMaquinaClase === 'papel-2') {
          this.resultadoJuego = 'YOU TIED'
        } else {
          if (this.EleccionMaquinaClase === 'tijera-2' ||this.EleccionMaquinaClase === 'lizard-2') {

            this.resultadoJuego = 'YOU LOSE'
            this.disenoCapaMaquina = 'capasDiseño'
            this.score = this.score - 1

          }
        }
      }
    }, 2500);
  }
  tijera2() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-scissors.svg'
    this.clase = 'tijera-2'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquinaMode2()
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'papel-2' || this.EleccionMaquinaClase === 'lizard-2') {
        this.resultadoJuego = 'YOU WIN'
        this.disenoCapasUsuario = 'capasDiseño'
        this.score = this.score + 1

      } else {
        if (this.EleccionMaquinaClase === 'tijera-2') {
          this.resultadoJuego = 'YOU TIED'
        } else {
          if (this.EleccionMaquinaClase === 'spock-2' ||this.EleccionMaquinaClase === 'piedra-2') {

            this.resultadoJuego = 'YOU LOSE'
            this.disenoCapaMaquina = 'capasDiseño'
            this.score = this.score - 1

          }
        }
      }
    }, 2500);
  }
  piedra2() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-rock.svg'
    this.clase = 'piedra-2'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquinaMode2()
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'lizard-2' || this.EleccionMaquinaClase === 'tijera-2') {
        this.resultadoJuego = 'YOU WIN'
        this.disenoCapasUsuario = 'capasDiseño'
        this.score = this.score + 1

      } else {
        if (this.EleccionMaquinaClase === 'piedra-2') {
          this.resultadoJuego = 'YOU TIED'
        } else {
          if (this.EleccionMaquinaClase === 'spock-2' ||this.EleccionMaquinaClase === 'papel-2') {

            this.resultadoJuego = 'YOU LOSE'
            this.disenoCapaMaquina = 'capasDiseño'
            this.score = this.score - 1

          }
        }
      }
    }, 2500);
  }
  lizard2() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-lizard.svg'
    this.clase = 'lizard-2'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquinaMode2()
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'papel-2' || this.EleccionMaquinaClase === 'spock-2') {
        this.resultadoJuego = 'YOU WIN'
        this.disenoCapasUsuario = 'capasDiseño'
        this.score = this.score + 1

      } else {
        if (this.EleccionMaquinaClase === 'lizard-2') {
          this.resultadoJuego = 'YOU TIED'
        } else {
          if (this.EleccionMaquinaClase === 'tijera-2' ||this.EleccionMaquinaClase === 'piedra-2') {

            this.resultadoJuego = 'YOU LOSE'
            this.disenoCapaMaquina = 'capasDiseño'
            this.score = this.score - 1

          }
        }
      }
    }, 2500);
  }
  spock2() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-spock.svg'
    this.clase = 'spock-2'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.EleccionDeLaMaquinaMode2()
    setTimeout(() => {
      this.MostrarResultado = true
      if (this.EleccionMaquinaClase === 'tijera-2' || this.EleccionMaquinaClase === 'piedra-2') {
        this.resultadoJuego = 'YOU WIN'
        this.disenoCapasUsuario = 'capasDiseño'
        this.score = this.score + 1

      } else {
        if (this.EleccionMaquinaClase === 'spock-2') {
          this.resultadoJuego = 'YOU TIED'
        } else {
          if (this.EleccionMaquinaClase === 'paper-2' ||this.EleccionMaquinaClase === 'lizard-2') {

            this.resultadoJuego = 'YOU LOSE'
            this.disenoCapaMaquina = 'capasDiseño'
            this.score = this.score - 1

          }
        }
      }
    }, 2500);
  }
  EleccionDeLaMaquinaMode2() {
    let min = 1
    let max = 5
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomValor = Math.floor(Math.random() * (max - min + 1)) + min; // El máximo y el mínimo son inclusivos.
    if (randomValor == 1) {
      setTimeout(() => {
        this.EleccionMaquinaClase = 'papel-2'
        this.EleccionMaquinaIMG = '../assets/icon-paper.svg'
        this.cargandoRespuesta = false
        this.respuestaCargada = true
      }, 1500);
    } else {
      if (randomValor == 2) {
        setTimeout(() => {
          this.EleccionMaquinaClase = 'piedra-2'
          this.EleccionMaquinaIMG = '../assets/icon-rock.svg'
          this.cargandoRespuesta = false
          this.respuestaCargada = true
        }, 1500);
      } else {
        if (randomValor == 3) {
          setTimeout(() => {
            this.EleccionMaquinaClase = 'tijera-2'
            this.EleccionMaquinaIMG = '../assets/icon-scissors.svg'
            this.cargandoRespuesta = false
            this.respuestaCargada = true
          }, 1500);
        } else {
          if (randomValor == 4) {
            setTimeout(() => {
              this.EleccionMaquinaClase = 'spock-2'
              this.EleccionMaquinaIMG = '../assets/icon-spock.svg'
              this.cargandoRespuesta = false
              this.respuestaCargada = true
            }, 1500);
          } else {
            if (randomValor == 5) {
              setTimeout(() => {
                this.EleccionMaquinaClase = 'lizard-2'
                this.EleccionMaquinaIMG = '../assets/icon-lizard.svg'
                this.cargandoRespuesta = false
                this.respuestaCargada = true
              }, 1500);
            }
          }
        }
      }
    }
  }
}
