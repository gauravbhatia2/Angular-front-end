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
  addCategory(val:any){
    return this.http.post(this.APIUrl+'/Category',val);
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl+'/Category',val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIUrl+'/Category/'+val);
  }


  getProdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/api/Products');
  }

  addProducts(val:any){
    return this.http.post(this.APIUrl+'/Products',val);
  }

  updateProduts(val:any){
    return this.http.put(this.APIUrl+'/Products',val);
  }

  deleteProducts(val:any){
    return this.http.delete(this.APIUrl+'/Products/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Products/SaveFile',val);
  }

  getAllProductsNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Products/GetAllCategoryName');
  }
}
