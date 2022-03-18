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
  EleccionMaquinaClase!:string
  EleccionMaquinaIMG!:string

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
    this.getRandomIntInclusive(1,3)
    

  }
  piedra() {
    this.eleccion = false
    this.proceso = true
    this.seleccion = '../assets/icon-rock.svg'
    this.clase = 'piedra'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'

  }
  tijera() {
    this.eleccion = false
    this.proceso = true
    this.clase = 'tijera'
    this.cargandoRespuesta = true
    this.opacity = 'opacityOpen'
    this.seleccion = '../assets/icon-scissors.svg'
  }
  getRandomIntInclusive(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomValor = Math.floor(Math.random() * (max - min + 1)) + min; // El máximo y el mínimo son inclusivos.
    if (randomValor == 1) {
      console.log('papel')
      setTimeout(() => {
        this.EleccionMaquinaClase='papel'
        this.EleccionMaquinaIMG='../assets/icon-paper.svg'
        this.cargandoRespuesta=false
        this.respuestaCargada=true
      }, 1500);
    } else {
      if (randomValor == 2) {
        console.log('piedra')
        setTimeout(() => {
          this.EleccionMaquinaClase='piedra'
          this.EleccionMaquinaIMG='../assets/icon-rock.svg'
          this.cargandoRespuesta=false
          this.respuestaCargada=true
        }, 1500);
      } else {
        if (randomValor == 3) {
          console.log('tijera')
          setTimeout(() => {
            this.EleccionMaquinaClase='tijera'
            this.EleccionMaquinaIMG='../assets/icon-scissors.svg'
            this.cargandoRespuesta=false
            this.respuestaCargada=true
          }, 1500);
        }
      }
    }
  }
}
