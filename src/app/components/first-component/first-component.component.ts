import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
 name:String = "Artur";
 year:Number =18;
 hobbie = [ "Lutar", "Jogar", "Progamar"];
 car= {
  name:"Urus",
  year:2023

 }

 
}
