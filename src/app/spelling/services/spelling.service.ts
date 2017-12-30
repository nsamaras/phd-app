import { by } from 'protractor';
import { Injectable } from '@angular/core';
import { Syllable } from '../../common/model/syllable.model';

@Injectable()
export class SpellingService {

  exercise01Answer = 'τρατρετρητριτροτρυτρωτραυτρειτριτρου'

  choicesExe01: Syllable[] =  [ new Syllable(1, 'τρα'),   
                                new Syllable(2, 'τρε'),
                                new Syllable(3, 'τρη'),
                                new Syllable(4, 'τρι'),
                                new Syllable(5, 'τρο'),
                                new Syllable(6, 'τρυ'),
                                new Syllable(8, 'τρω'),
                                new Syllable(9, 'τραυ'),
                                new Syllable(10, 'τρει'),
                                new Syllable(11, 'τρι'),
                                new Syllable(12, 'τρου')
                              ];    

  constructor() { }

  isCorrectOrder(values: number[]) {
    for(let x=0; x<values.length; x++) {
        if(values[x] > values[x+1]) {
            return false;
        }
    }
    return true;
  }

  getTitleExercise01() {
    return 'Σύρε τη συλλαβή που λείπει, για να ολοκληρωθεί η λέξη.';
  }

  getChoicesExercise01() {
    return this.choicesExe01;
  } 

  getIdExe01(value) {     
     for(let x=0; x<this.choicesExe01.length; x++) {
        if(this.choicesExe01[x].str === value) {
          return this.choicesExe01[x].id;          
        }
     }
  }
 
}
