import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ServiceExercise03Service } from './service/service-exercise03.service';
import { Syllable } from '../../common/model/syllable.model';

@Component({
  selector: 'app-exercise-03',
  templateUrl: './exercise-03.component.html',
  styleUrls: ['./exercise-03.component.css']
})
export class Exercise03Component implements OnInit {
  
  choices:  Syllable[]; 
  
  constructor(private dragulaService: DragulaService,
        private service: ServiceExercise03Service) {
          
        this.choices = service.getChoices(); 

        dragulaService.drop.subscribe((value) => {
          this.onOver(value.slice(2));
        });
  }

  ngOnInit() {
  }

  private onOver(args) {
    let answers: string[] = [];
    let [e, el, container] = args;
    let text = (e.innerText).replace(/\s/g, '');
    console.log(text)
    
  }


}
