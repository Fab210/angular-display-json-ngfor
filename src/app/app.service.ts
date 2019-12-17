import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';

@Injectable({
        providedIn: 'root'
    })

export class DataService  {
 
  constructor( private http: HttpClient) {}
  
  getInfos(){
   return this.http.get('https://gitconnected.com/v1/portfolio/fab210');
  }
}