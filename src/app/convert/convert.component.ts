import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent{
	form;
	ngOnInit(){
		this.form = new FormGroup({
			binary : new FormControl(""),
			decimal : new FormControl(""),
			hex : new FormControl(""),
			octal : new FormControl("")
		});
	}

	b=0; o=0; h=0;
	
	decimalChanged = function(oldValue, newValue){
		if(newValue != ""){
			console.log("dec- b:" + this.b + " o:" + this.o + " h:" + this.h);
			this.form.patchValue({binary: parseInt(newValue, 10).toString(2)});
			this.form.patchValue({octal: parseInt(newValue, 10).toString(8)});
			this.form.patchValue({hex: parseInt(newValue, 10).toString(16).toUpperCase()});
		}
		else{
			this.form.patchValue({binary: ""});
			this.form.patchValue({octal: ""});
			this.form.patchValue({hex: ""});
		}
	}

	binaryChanged = function(oldValue, newValue){
		this.b = this.b + 1;

		if(this.b==1){
			if(newValue != ""){
				console.log("bin- b:" + this.b + " o:" + this.o + " h:" + this.h);
				this.form.patchValue({decimal: parseInt(newValue, 2).toString(10)});
			}
			else{
				this.form.patchValue({decimal: ""});
			}

		this.b = 0;
		}
	}

	octalChanged = function(oldValue, newValue){
		this.o = this.o + 1;

		if(this.o==1){
			if(newValue != ""){
				console.log("oct- b:" + this.b + " o:" + this.o + " h:" + this.h);
				this.form.patchValue({decimal: parseInt(newValue, 8).toString(10)});
			}
			else{
				this.form.patchValue({decimal: ""});
			}
		this.o = 0;
		}

	}

	hexChanged = function(oldValue, newValue){
		this.h = this.h + 1;

		if(this.h==1){
			if(newValue != ""){
				console.log("hex- b:" + this.b + " o:" + this.o + " h:" + this.h);
				this.form.patchValue({decimal: parseInt(newValue, 16).toString(10)});
			}
			else{
				this.form.patchValue({decimal: ""});
			}
		this.h = 0;
		}
	}
}
