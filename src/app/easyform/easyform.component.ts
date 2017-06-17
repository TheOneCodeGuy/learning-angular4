import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-easyform',
  templateUrl: './easyform.component.html',
  styleUrls: ['./easyform.component.css']
})
export class EasyformComponent implements OnInit {

 	form : FormGroup;

 	name : FormControl;
 	lname : FormControl;

  ngOnInit() {
  	this.createFormControl();
  	this.createForm();
  }

  createFormControl = function(){
  	this.name = new FormControl("", [
  		Validators.required,
  		Validators.minLength(3)
  	]);
  	
  	this.lname = new FormControl("", Validators.required);
  }

  createForm = function(){
  	this.form = new FormGroup({
  		name : this.name,
  		lname : this.lname
  	});
  }

  submit = function(data){
		console.log(data);
	}

}
