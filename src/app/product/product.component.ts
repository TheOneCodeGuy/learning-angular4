import { Component} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  name = "rengu";
  date = new Date();
  cost = 123.455;
  arr = [34, 65, 2, 14, 23];
  names = ['Ala', 'Subra', 'Renga', 'Mugam'];
}
