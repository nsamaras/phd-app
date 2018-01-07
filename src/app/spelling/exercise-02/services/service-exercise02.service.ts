import { Injectable } from '@angular/core';
import { Exercise02Model } from '../model/exercise02.model';

@Injectable()
export class ServiceExercise02Service {

  answers: Exercise02Model[] = []
  exist: boolean = false;
  
  correctAnswer = [new Exercise02Model('αποτραβώ', ['α','πο','τρα', 'βώ']),
                    new Exercise02Model('ανατρέπω', ['α','να','τρέ', 'πω']),
                    new Exercise02Model('καταμέτρηση', ['κα','τα','μέ', 'τρη', 'ση'])
  
                  ];
  
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

  isCorrectOrder () {
    let isCorrect = true;
    if(this.correctAnswer.length !== this.answers.length) {
      return false;
    }
    for(let x=0; x<this.correctAnswer.length; x++) {
      let title = this.answers[x].title;
      let correctAnswer:string[] = this.getCorrectAnswerByTitle(title);
      let result = this.checkTheAnswer(correctAnswer, this.answers[x].letters);
      if(result) {
        continue;
      } else {
        return false;
      }
    }    
    return isCorrect;
  }

  private getCorrectAnswerByTitle(title) {
    for(let x=0; x<this.correctAnswer.length; x++) {
      if(this.correctAnswer[x].title === title) {
        return this.correctAnswer[x].letters;
      }
    }
  }

  private checkTheAnswer(correctAnswer:string[], userAnswer:string[]) {    
    for(let x=0; x<correctAnswer.length; x++) {
      let chars = userAnswer[x]
      if(chars!== undefined && correctAnswer[x] != chars) {
        return false;
      }
    }
    return true;
  }

}
