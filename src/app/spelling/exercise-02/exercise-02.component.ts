import { Component, OnInit } from '@angular/core';
import { SpellingService } from '../services/spelling.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Exercise02Model } from './model/exercise02.model';
import { ServiceExercise02Service } from './services/service-exercise02.service';

@Component({
  selector: 'app-exercise-02',
  templateUrl: './exercise-02.component.html',
  styleUrls: ['./exercise-02.component.css']
})
export class Exercise02Component implements OnInit {
 
  isCorrectAnswer: boolean = false;
  title = 'Testing ng2-dragula';
  options: any = {
    removeOnSpill: true
  }
  ngOnInit() {
  }
  constructor(private dragulaService: DragulaService,
    private service: ServiceExercise02Service) {
      dragulaService.drop.subscribe((value) => {
        this.onOver(value.slice(2));
      });
       
  }
  private onOver(args) {
    let answers: string[] = [];
    let [e, el, container] = args;
    let text = (e.innerText).replace(/\s/g, '');
    console.log(text)
    let fromId = el.id
    let toId = e.id
    let title = e.title;

    let letters:string[] = this.service.getByTitle(title);
    if (letters!== null) {
      answers = letters;
    }
    // console.log(el.id, e.id);    
    answers[toId] = text;    
    if(el.id !== "inline") {
      let str = el.innerText;      
      answers[fromId] = str.replace(/\s/g, '');
    }
    console.log(answers);
    this.service.save(e.title, answers);
    this.isCorrectAnswer = this.service.isCorrectOrder();
  }
}
