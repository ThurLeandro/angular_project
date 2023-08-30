import { Component, Input} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-parental-data',
  templateUrl: './parental-data.component.html',
  styleUrls: ['./parental-data.component.css']
})
export class ParentalDataComponent {
 user:string = '';
 nome:string = '';

}
