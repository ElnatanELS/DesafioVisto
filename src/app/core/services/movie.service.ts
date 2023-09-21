import { Result } from '../../shared/models/movie';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import {HttpParams, HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private language:string = "pt-BR"

  constructor(private http: HttpClient) { }

  getMovies(page:number): Observable<Result>{
    var params:HttpParams = new HttpParams()
    params = params.append('language', this.language)
    params = params.append('page', page)



    return this.http.get<Result>(environment.urlApi + '/popular', {params})
  }
  getSearchMovie(page:number, name:string, year:string): Observable<Result>{
    var params:HttpParams = new HttpParams()
    params = params.append('language', this.language)
    params = params.append('page', page)
    params = params.append('query', name)
    params = params.append('include_adult', false)
    if(year){
      params = params.append('primary_release_year', year)

    }
    console.log(params.toString());



    return this.http.get<Result>(environment.urlApi + '/popular', {params})
  }
}
