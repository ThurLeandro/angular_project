import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/Carros';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  carro?: Carro
  constructor(private listService: ListService, private route: ActivatedRoute ){
    this.getCar()
  }
  getCar(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((carro) => (this.carro = carro))
  }

}
