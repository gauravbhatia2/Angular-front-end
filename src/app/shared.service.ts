import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
readonly APIUrl="http://gauravbhatia-001-site1.itempurl.com/";
  constructor(private http:HttpClient) { }
  getCatList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/api/category');
  }
  getCustList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/api/Customer');
  }
  getOrdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/api/Orders');
  }
  getProdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/api/Products');
  }

}
