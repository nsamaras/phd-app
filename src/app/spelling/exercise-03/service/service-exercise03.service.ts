import { Injectable } from '@angular/core';
import { Syllable } from '../../../common/model/syllable.model';

@Injectable()
export class ServiceExercise03Service {
  

  choices: Syllable[] =  [ new Syllable(1, 'ρτα'),   
                                new Syllable(2, 'ρτε'),
                                new Syllable(3, 'ρτη'),
                                new Syllable(4, 'ρτι'),
                                new Syllable(5, 'ρτο'),
                                new Syllable(6, 'ρτυ'),
                                new Syllable(8, 'ρτω'),
                                new Syllable(9, 'ρται'),
                                new Syllable(10, 'ρτια'),
                                new Syllable(11, 'ρτου')
                              ]; 

  constructor() { }

  getChoices () {
    return this.choices;
  } 
}
