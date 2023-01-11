import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit{

  valued:number = 0;
  constructor(private numb:MyserviceService) { }

  ngDoCheck():void {
   this.valued = this.numb.getvalue2()
  }
  ngOnInit(){
   

}
}