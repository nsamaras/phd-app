import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-exercise-01',
  templateUrl: './exercise-01.component.html',
  styleUrls: ['./exercise-01.component.css']
})
export class Exercise01Component implements OnInit {

  constructor(private dragulaService: DragulaService) {
    
        dragulaService.setOptions('bag-task1', {
          removeOnSpill: true         
        });
        dragulaService.setOptions('bag-task2', {
          revertOnSpill: true,
        });
        dragulaService.setOptions('bag-task3', {
          revertOnSpill: true,
        });
        
    }

  ngOnInit() {
  }

}
