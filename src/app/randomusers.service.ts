import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './random.data.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomusersService {
  
constructor(private http: HttpClient) { }

  getData(page: number, size: number): Observable<UserData>{
    return this.http.get<UserData>(`https://randomuser.me/api/?page=${page}&results=${size}&seed=abc`);
  }
}
