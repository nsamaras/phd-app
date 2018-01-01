import { by } from 'protractor';
import { Injectable } from '@angular/core';
import { Syllable } from '../../common/model/syllable.model';

@Injectable()
export class SpellingService {
  constructor() { }

  //**** EXERCISE-01 ****

  exercise01Answer = 'τρατρετρητριτροτρυτρωτραυτρειτριτρου'

  exercise01: Syllable[] = [new Syllable(20, '-γα-νό'),   
                              new Syllable(21, '-μω'),
                              new Syllable(22, '-μα-τα'),
                              new Syllable(23, '-γυ-ρί-ζω'),
                              new Syllable(24, '-μά-ρα'),
                              new Syllable(25, '-πα'),
                              new Syllable(26, '-ω'),
                              new Syllable(27, '-μα-τι-σμός'),
                              new Syllable(28, '-ς'),
                              new Syllable(29, '-αι-να'),
                              new Syllable(30, '-φα')
                            ];

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
  

  isCorrectOrder (answer) {
    return answer === this.exercise01Answer ? true : false;
  }

  getExcercise01 () {
    return this.exercise01;
  }

  getChoicesExercise01 () {
    return this.choicesExe01;
  } 

  //**** EXERCISE-02 ****
exercise02Answer = [{title:'first', word:'αποτραβώ'},
                    {title:'second', word:'ανατρέπω'},
                    {title:'third', word:'καταμέτρηση'},
                    {title:'fourth', word:'ιατρική'},
                    {title:'fifth', word:'δίμετρος'},
                    {title:'sixth', word:'τρυπάνι'},
                    {title:'seventh', word:'αναμετρώ'},
                    {title:'eighth', word:'τραύμα'},
                    {title:'ninth', word:'τραύμα'},
                    {title:'tenth', word:'λατρεία'},
                    {title:'eleventh', word:'γεωμετρία'},
                    {title:'twelfth', word:'τρούλος'},
                    {title:'thirteenth', word:'Μάρτιος'}

      ];
}
