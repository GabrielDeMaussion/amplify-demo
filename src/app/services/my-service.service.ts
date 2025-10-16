import { Injectable } from '@angular/core';
import { env } from '../environments/entorno';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  appUrl = env.apiUrl;
  

constructor() { }
  
}
