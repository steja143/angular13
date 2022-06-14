import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DatalistComponent } from './datalist/datalist.component';
import { DemoComponent } from './demo/demo.component';
import { RathodModule} from './rathod/rathod.module'
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserlistComponent,
    DatalistComponent,
    DemoComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RathodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
