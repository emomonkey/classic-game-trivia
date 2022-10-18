import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {QuestionArray} from './trivia';


@Injectable({
  providedIn: 'root'
})

export class TriviaService {

  

  constructor(private http: HttpClient) { }

  getTrivia(): Observable<QuestionArray> {
   return this.http.get('https://raw.githubusercontent.com/emomonkey/classic-game-trivia/main/src/assets/data/trivia.json') as Observable<QuestionArray>;
  }



}
