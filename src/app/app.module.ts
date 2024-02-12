import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderByPipePipe } from './order-by-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [OrderByPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
