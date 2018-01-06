import { Injectable } from '@angular/core';
import { Exercise02Model } from '../model/exercise02.model';

@Injectable()
export class ServiceExercise02Service {

  answers: Exercise02Model[] = []
  exist: boolean = false;
  constructor() { }

  public save(title: string, str: string[] ) {
      for (let x=0; x<this.answers.length; x++) {
        if(this.answers[x].title === title) {
          this.exist = true;
          break;
        }
      }
      if(this.exist) {
        this.updateObj(title);
      }
      this.answers.push(new Exercise02Model(title, str));
      console.log(this.answers);
  }

   private updateObj(title) {
      for(let x=0; x<this.answers.length; x++) {
        if(this.answers[x].title === title) {        
          this.answers.splice(x,1);
          break;
        }
      }    
  }

  getByTitle(title) {
    for(let x=0; x<this.answers.length; x++) {
      if(this.answers[x].title === title) {        
        return this.answers[x].letters;        
      }
    } 
    return null; 
  }

}
