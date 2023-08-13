import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addPage } from './header/addPageModel';

@Injectable({
  providedIn: 'root'
})
export class AddPageService {

  baseUrl = "http://localhost:3000/addpage"

  constructor(private http:HttpClient) { }

  getPage(){
    return this.http.get<addPage[]>(this.baseUrl)
  }

  postPage(data:any){
    return this.http.post<addPage>(this.baseUrl,data)
  }

  deletePage(id:number){
    return this.http.delete<addPage>(this.baseUrl + '/' + id)
  }

  updatePage(data: any, id: number){
    return this.http.put<addPage>(this.baseUrl + '/' + id, data)
  }
}
