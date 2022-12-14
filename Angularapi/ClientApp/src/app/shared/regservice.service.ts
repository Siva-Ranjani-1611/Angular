import { Injectable } from '@angular/core';
import { Angularmodel } from '../angularmodel.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  apiUrl ="http://localhost:63333/api/Sample/Get"
  constructor(private httpClient: HttpClient) { }
  angdata: Angularmodel = new Angularmodel();
  datalist!: Angularmodel[];
  getdatalist(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
