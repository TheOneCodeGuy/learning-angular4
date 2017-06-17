import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms'; //template Driven
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import  { ReactiveFormsModule } from '@angular/forms'; //model driven


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { SortPipe } from 'app/app.sort';
import { ConvertComponent } from './convert/convert.component';
import { ValidationComponent } from './validation/validation.component'

@NgModule({
  declarations: [
  	SortPipe,
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent,
    ConvertComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    	{
    		path : 'model-driven-form',
    		component : MyComponentComponent 
    	},
    	{
    		path : 'template-driven-form',
    		component : MembersComponent 
    	},
    	{
    		path : 'pipes',
    		component : ProductComponent 
    	},
      {
        path : 'convert',
        component : ConvertComponent
      },
      {
        path : 'validation',
        component : ValidationComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
