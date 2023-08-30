import { style } from '@angular/animations';
import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  cor = "red"
  siz = "35px"
  letraGrande(): void{
    let element = document.querySelector('.tex') as HTMLLIElement

      element.style.color = this.cor
      element.style.fontSize = this.siz
      element.style.width = "250px"
      
    
  }
  letraNormal(): void{
    let element = document.querySelector('.tex') as HTMLLIElement

    element.style.fontSize = "16px"
    element.style.color = "black"
    element.style.width = "100px"
    element.innerText = "Atenção você é incrivel"
    
  }
  text = ""
  enviar(): void{
      let div = document.querySelector('.div') as HTMLLIElement
      var text= document.querySelector('.t') as HTMLLIElement

      text.toString
      



  }


}
