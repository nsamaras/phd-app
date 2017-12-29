import { Injectable } from '@angular/core';

@Injectable()
export class SpellingService {

  exercise01Answer = 'τρατρετρητριτροτρυτρωτραυτρειτριτρου'

  constructor() { }

  isCorrectExcercise01(value) {
    return this.exercise01Answer === value ? true : false
  }

}
