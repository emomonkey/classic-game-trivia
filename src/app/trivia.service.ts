import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {QuestionArray} from './trivia';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private hhtp: HttpClient) { }

  return this.http.get('') as Observable<QuestionArray>;
}
