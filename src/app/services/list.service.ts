import { Injectable } from '@angular/core';
import { Carro } from '../Carros';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL = 'http://localhost:3000/carros'

  constructor(private http : HttpClient) { }
  remove(id: number){
   return this.http.delete<Carro>(`${this.apiURL}/${id}`)

  }
  getAll(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.apiURL)
  }
  getItem(id: number): Observable<Carro>{
    return this.http.get<Carro>(`${this.apiURL}/${id}`)

  }
}
