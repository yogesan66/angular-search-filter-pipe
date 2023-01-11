import { Component, VERSION } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  count : number = 0
 increment(){
    this.count++;
    this.num.counter2 = this.count;
 }

 constructor(private num:MyserviceService){}
  }

