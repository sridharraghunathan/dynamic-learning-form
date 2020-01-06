import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {   Iplatform } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
 
  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

 
  public getPlatforms() : Observable<Iplatform[]> { 
    return this.httpClient.get<Iplatform[]>(this.SERVER_URL + 'platforms');
}

}
