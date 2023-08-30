import { Component } from '@angular/core';
import { Carro } from 'src/app/Carros';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent {
  
  carros:Carro[] = []

  infoCar = '';

  infos(carro: Carro): void{
    this.infoCar = `o modelo ${carro.modelo} da marca ${carro.marca} é do ano de ${carro.ano}`;
  }
  constructor(private listService:ListService){
    this.getCarros()
  };
  removeCar(carro: Carro){
    this.carros = this.carros.filter((c) => carro.id !== c.id)
    this.listService.remove(carro.id).subscribe();


  }
  getCarros(): void{
    this.listService.getAll().subscribe((carro)=> (this.carros = carro))
  }

}
