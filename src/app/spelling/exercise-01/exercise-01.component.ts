import { Component, OnInit, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SpellingService } from '../services/spelling.service';

@Component({
  selector: 'app-exercise-01',
  templateUrl: './exercise-01.component.html',
  styleUrls: ['./exercise-01.component.css']
})
export class Exercise01Component implements OnInit {
  answer ='';
  isCorrectAnswer: boolean = false;
  
  constructor(private dragulaService: DragulaService,
            private spellingService: SpellingService) {
    
        dragulaService.setOptions('bag-task1', {
          removeOnSpill: true         
        });
        dragulaService.setOptions('bag-task2', {
          revertOnSpill: true,
        });
        dragulaService.setOptions('bag-task3', {
          revertOnSpill: true,
        });

        dragulaService.drop.subscribe((value) => {
          console.log('innerHTML',value[1].innerHTML); // the item which was dragged  
          this.answer = this.answer.concat(value[1].innerHTML);
          console.log(this.answer);
          //this.isCorrectAnswer = this.spellingService.isCorrectExcercise01(this.answer)
          this.isCorrectAnswer = true;
        });
    }

  ngOnInit() {
  }
  onClick() {
    console.log('Click next btn')
  }
}
