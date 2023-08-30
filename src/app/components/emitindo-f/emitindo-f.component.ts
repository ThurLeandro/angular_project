import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitindo-f',
  templateUrl: './emitindo-f.component.html',
  styleUrls: ['./emitindo-f.component.css']
})
export class EmitindoFComponent {
  @Output() troca:EventEmitter<any> = new EventEmitter();
  @Output() troca1:EventEmitter<any> = new EventEmitter();

  clica(){
    this.troca.emit()
  }
  clica1(){
    this.troca1.emit()
  }

}
