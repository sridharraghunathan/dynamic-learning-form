import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IQuestionaire, Aif } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
 
  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  public getQuestionsData(): Observable<IQuestionaire[]>{ 
       return this.httpClient.get<IQuestionaire[]>(this.SERVER_URL + 'questions');
  }


  public getAifDtl(): Observable<Aif[]>{ 
       return this.httpClient.get<Aif[]>(this.SERVER_URL + 'aifDtl');
  }


}
