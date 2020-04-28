import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadLines() {
    const pais = 'co';
    const URL = `http://newsapi.org/v2/top-headlines?country=${pais}&apiKey=ffe209dee6f248f8aa01d4c55a989393`;
    return this.http.get<RespuestaTopHeadLines>(URL);
  }

}
