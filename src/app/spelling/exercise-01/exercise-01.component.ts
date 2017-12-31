import { Component, OnInit, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SpellingService } from '../services/spelling.service';
import { Syllable } from '../../common/model/syllable.model';

@Component({
  selector: 'app-exercise-01',
  templateUrl: './exercise-01.component.html',
  styleUrls: ['./exercise-01.component.css']
})
export class Exercise01Component implements OnInit {
  
  choices:  Syllable[]; 
  excercise01: Syllable[];     
  isCorrectAnswer: boolean = false;
  
  constructor(private dragulaService: DragulaService,
            private spellingService: SpellingService) {

        
        this.choices = spellingService.getChoicesExercise01(); 
        this.excercise01 = spellingService.getExcercise01();

        dragulaService.drop.subscribe((value) => {   
          let answer  = '';  
          for(let x=0; x<this.excercise01.length; x++) {
            let l = document.getElementById(""+this.excercise01[x].id).innerText;
            
            answer = answer.concat(l.trim())
            console.log(answer);
          }       
          this.isCorrectAnswer = this.spellingService.isCorrectOrder(answer)
          // this.isCorrectAnswer = true;
          
        });
    }
    
  ngOnInit() {
  }
 
}
