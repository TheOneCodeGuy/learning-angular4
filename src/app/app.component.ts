import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rengu';
  obj = {
  	id: 1,
  	name: "rengu"
  };
  arr = [
  	{ id: 1, name: "rengu"},
  	{ id: 4, name: "Raju"}
  ];
  styleObj = {
  	"color" : "red"
  }
}
