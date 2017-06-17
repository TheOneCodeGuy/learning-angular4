import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor( 
  	private newService: MyDataService
  )
  {}

  ngOnInit() {
  	// console.log(this.newService.obj);
  	this.newService.fetchData();
  }

}
