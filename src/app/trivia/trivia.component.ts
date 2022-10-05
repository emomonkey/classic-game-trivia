import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import {Question, QuestionArray, Answer} from "../trivia";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  triviaData: QuestionArray = [];
  question: Question|null = null;
  answer: Answer|null = null;

  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void {
    this.getTrivia();
  }

  getTrivia(){
    this.triviaService.getTrivia().subscribe({
      next: (data) => {
        this.triviaData = data;
        this.getNextQuestion();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getNextQuestion() {
    if (this.triviaData.length){
      const index = Math.floor(Math.random() * this.triviaData.length);
      this.question = this.triviaData[index];
      this.triviaData.splice(index, 1);
    } else {
      this.question = null;
    }
  }

  getCorrectAnswer() {
    if (this.question) {
      return this.question.answers.filter(answer => answer.is_correct)[0].answer;
    }
    return '';
  }

}
