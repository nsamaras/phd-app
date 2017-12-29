import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { SpellingComponent } from './spelling/spelling.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellingComponent    
  ],
  imports: [
    BrowserModule,  
    DragulaModule,  
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
