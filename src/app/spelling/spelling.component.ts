import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-spelling',
  templateUrl: './spelling.component.html',
  styleUrls: ['./spelling.component.css']
})
export class SpellingComponent implements OnInit {

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
