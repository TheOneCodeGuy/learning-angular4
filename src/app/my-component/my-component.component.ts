import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent{
	form;
	ngOnInit(){
		this.form = new FormGroup({
		name : new FormControl("Renga"),
		gender : new FormControl(""),
		})
	}; 
	submit = function(data){
		console.log(data);
	}
}
