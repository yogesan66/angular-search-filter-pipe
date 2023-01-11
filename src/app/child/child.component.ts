import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private refe:MyserviceService) { }

  value:any;
  ngOnInit() {
    this.value = this.refe.getvalue();
  }

}