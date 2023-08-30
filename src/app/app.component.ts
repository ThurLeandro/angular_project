import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "Artur";
  userDate = {
    email: "artur@gmail.com",
    senha: "Artur123",
    idade: 18

  }

  
  title = 'angular-project';
}
