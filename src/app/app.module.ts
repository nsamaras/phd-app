
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { SpellingComponent } from './spelling/spelling.component';
import { Exercise01Component } from './spelling/exercise-01/exercise-01.component';
import { SpellingService } from './spelling/services/spelling.service';
import { Exercise02Component } from './spelling/exercise-02/exercise-02.component';
import { Exercise03Component } from './spelling/exercise-03/exercise-03.component';
import { ServiceExercise02Service } from './spelling/exercise-02/services/service-exercise02.service';
import { ServiceExercise03Service } from './spelling/exercise-03/service/service-exercise03.service';

//My Routers 
const appRoutes: Routes = [  
  {path:'', component: Exercise01Component},
  {path:'exercise-01', component: Exercise01Component},
  {path:'exercise-02', component: Exercise02Component},
  {path:'exercise-03', component: Exercise03Component}
]
@NgModule({
  declarations: [
    AppComponent,
    SpellingComponent,
    Exercise01Component,
    Exercise02Component,
    Exercise03Component    
  ],
  imports: [
    BrowserModule,  
    DragulaModule,  
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    SpellingService,
    ServiceExercise02Service,
    ServiceExercise03Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
