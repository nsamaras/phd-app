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
  title = '';
  choices:  Syllable[];    
  answer : number[] = new Array();
  isCorrectAnswer: boolean = false;
  
  constructor(private dragulaService: DragulaService,
            private spellingService: SpellingService) {

        this.title = spellingService.getTitleExercise01();
        this.choices = spellingService.getChoicesExercise01(); 

        dragulaService.drop.subscribe((value) => {           
          let str = value[1].innerText;
          let id = spellingService.getIdExe01(str.trim());
          this.answer.push(id);        
          
          console.log(this.answer);
          //this.isCorrectAnswer = this.spellingService.isCorrectOrder(this.answer)
          this.isCorrectAnswer = true;
          return this.isCorrectAnswer;
        });
    }

  ngOnInit() {
  }
 
}
