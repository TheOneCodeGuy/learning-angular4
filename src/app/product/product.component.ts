import { Component, OnInit} from '@angular/core';
import { MyDataService } from './../my-data.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

	constructor(
		private newService: MyDataService
	){}

	ngOnInit(){
		this.newService.obj.name = "Shanmu";
		console.log(this.newService.obj);
	}
	  
	name = "rengu";
	date = new Date();
	cost = 123.455;
	arr = [34, 65, 2, 14, 23];
	names = ['Ala', 'Subra', 'Renga', 'Mugam'];
	
}
