import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentalDataComponent } from './components/parental-data/parental-data.component';
import { DiretivesComponent } from './components/diretives/diretives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitindoEComponent } from './components/emitindo-e/emitindo-e.component';
import { EmitindoFComponent } from './components/emitindo-f/emitindo-f.component';
import { RenderListComponent } from './components/render-list/render-list.component';
import { PiperComponent } from './components/piper/piper.component';
import { WayDataComponent } from './components/way-data/way-data.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentalDataComponent,
    DiretivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitindoEComponent,
    EmitindoFComponent,
    RenderListComponent,
    PiperComponent,
    WayDataComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
