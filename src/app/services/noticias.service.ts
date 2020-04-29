import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const apiPais = environment.apiiPais;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  constructor( private http: HttpClient ) { }

  getTopHeadLines() {
    return this.http.get<RespuestaTopHeadLines>(`${ apiUrl }/top-headlines?country=${ apiPais }&apiKey=${ apiKey }`);
  }

  getTopHeadLinesCategoria( categoria: string ) {
    return this.http.get<RespuestaTopHeadLines>(`${ apiUrl }/top-headlines?country=${ apiPais }&category=${ categoria }&apiKey=${apiKey}`);
  }

}
