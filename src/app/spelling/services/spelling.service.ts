import { Injectable } from '@angular/core';

@Injectable()
export class SpellingService {

  exercise01Answer = 'τρατρετρητριτροτρυτρωτραυτρειτριτρου'

  constructor() { }

  isCorrectExcercise01(value) {
    return this.exercise01Answer === value ? true : false
  }

  getTitleExercise01() {
    return 'Σύρε τη συλλαβή που λείπει, για να ολοκληρωθεί η λέξη.';
  }

  getAnswersExercise01() {
    return ['τρα', 'τρε', 'τρη', 'τρι', 'τρο', 'τρυ', 'τρω', 'τραυ', 'τρει', 'τρι', 'τρου']; 
  } 

  
 
}
