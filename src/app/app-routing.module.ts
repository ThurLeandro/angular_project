import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentalDataComponent } from './components/parental-data/parental-data.component';
import { DiretivesComponent } from './components/diretives/diretives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmitindoEComponent } from './components/emitindo-e/emitindo-e.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RenderListComponent } from './components/render-list/render-list.component';
import { WayDataComponent } from './components/way-data/way-data.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'parental', component: ParentalDataComponent},
  {path: 'diretiva', component: DiretivesComponent},
  {path: 'if', component: IfRenderComponent},
  {path: 'emitindo', component: EmitindoEComponent},
  {path: 'event', component: EventosComponent},
  {path: 'list', component: RenderListComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'way', component: WayDataComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
