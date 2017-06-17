import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { 

  }

  obj = {
  	id: "1",
  	name: "Rengu",
  	rollno: 34
  }

  success() {
  	return "Successful"
  }

}
