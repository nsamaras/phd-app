import { Component, OnInit } from '@angular/core';
import { SpellingService } from '../services/spelling.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-exercise-02',
  templateUrl: './exercise-02.component.html',
  styleUrls: ['./exercise-02.component.css']
})
export class Exercise02Component implements OnInit {
  answer ='';
  isCorrectAnswer: boolean = false;
  title = 'Testing ng2-dragula';
  options: any = {
    removeOnSpill: true
}
  constructor(private dragulaService: DragulaService,
    private spellingService: SpellingService) {

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

}
