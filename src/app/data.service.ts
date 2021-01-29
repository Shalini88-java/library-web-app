import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:8081";
  private GET_LIBRARY = "/v1/library";
  private GET_LIBRARY_BOOKS = "/v1/library/{libraryid}/books";
  constructor(private httpClient: HttpClient) { }


  public sendGetLibraryRequest(): any{
    return this.httpClient.get(this.REST_API_SERVER+this.GET_LIBRARY);
  }

  public sendGetBooksOfLibraryRequest(id:string){
    return this.httpClient.get(this.REST_API_SERVER+this.GET_LIBRARY_BOOKS.replace("{libraryid}",id));
  }
}
