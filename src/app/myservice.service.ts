import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
  counter :any;
  counter2:number;

  getvalue(){
    return this.counter;
  }
  getvalue2(){
    return this.counter2;
  }
}