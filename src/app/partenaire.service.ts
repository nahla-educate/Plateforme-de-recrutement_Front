
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partenaire } from './devenir-partenaire/devenir-partenaire.component';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private url ="http://localhost:8080/part/"; 

  constructor(private httpClient:HttpClient) { }
  addPart(newPart) {
    return this.httpClient.post<Partenaire>('http://localhost:8080/part/partenaires', newPart);
  }
  getPartenaires() {
    // const searchUrl = '${this.baseUrl}/search/categoryid?id=${categoryId}'
     return this.httpClient.get<Partenaire[]>('http://localhost:8080/part/getPart');
   }
   getPartenairesAll() {
    // const searchUrl = '${this.baseUrl}/search/categoryid?id=${categoryId}'
     return this.httpClient.get<Partenaire[]>('http://localhost:8080/part/getPartAll');
   }
   PartValid(part: Partenaire, id:Number) {
    return this.httpClient.put<Partenaire>('http://localhost:8080/part/validePart'+ id, part);

  }

  /* getPays() {
    return this.httpClient.get<Pays[]>('http://localhost:8080/pays');
  }*/

  ValidePart(c: Partenaire , id :number){
    return this.httpClient.put<Partenaire>('http://localhost:8080/part/validePart/' + id, c);
  }
}
