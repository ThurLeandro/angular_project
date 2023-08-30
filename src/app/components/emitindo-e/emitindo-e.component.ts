import { Component } from '@angular/core';

@Component({
  selector: 'app-emitindo-e',
  templateUrl: './emitindo-e.component.html',
  styleUrls: ['./emitindo-e.component.css']
})
export class EmitindoEComponent {
  number = 0
  snumber = 10
  onclica(){
    this.number = Math.floor(Math.random() * 10)
  }

  onclica1(){
    this.snumber = Math.floor(Math.random() * 100)
  }

}
