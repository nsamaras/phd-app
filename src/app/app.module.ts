import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { SpellingComponent } from './spelling/spelling.component';
import { Exercise01Component } from './spelling/exercise-01/exercise-01.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellingComponent,
    Exercise01Component    
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
