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
    this.EleccionDeLaMaquina(1, 3)
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
    this.EleccionDeLaMaquina(1, 3)
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
    this.EleccionDeLaMaquina(1, 3)
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

  EleccionDeLaMaquina(min: any, max: any) {
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
}
