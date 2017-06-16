import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { SortPipe } from 'app/app.sort'

@NgModule({
  declarations: [
  	SortPipe,
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
    		component : Prod 
    	}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
