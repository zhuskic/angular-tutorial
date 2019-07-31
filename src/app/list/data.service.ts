import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  dataUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.dataUrl);
  }

}