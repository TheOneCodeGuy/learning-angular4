import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent{

	form;
	ngOnInit(){
		this.form = new FormGroup({
		name : new FormControl("",[
			Validators.required,
			Validators.minLength(3),
			Validators.pattern('[\\w\\-\\s\\/]+')
		]),
		lname : new FormControl("", this.textValidator),
		gender : new FormControl(""),
		})
	}; 

	textValidator = function(control) {
		if(control.value.length < 3) {
			return { 'lname': true};
		}
	}

	submit = function(data){
		console.log(data);
	}

}
