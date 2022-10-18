import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import {Question, QuestionArray, Answer, Score} from "../trivia";
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  triviaData: QuestionArray = [];
  scoreData: Score[] = [];
  question: Question|null = null;
  answer: Answer|null = null;
  maxscore: Score|null = null;
  disableRadioButtons: boolean = false;
  disableNextButton: boolean = true;
  questionNumber: number = 0;
  correctAnswers: number = 0;


  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void {
    this.getTrivia();
    this.getScoreData();
    this.maxscore = this.scoreData[0];
  }

  getScoreData()
  {
    this.scoreData = JSON.parse(localStorage.getItem("maxscore") || '{}');
  }

  setScoreData(scoreval: number)
  {

    let localscore: Score = {score: scoreval, scoredate: new Date};

    this.scoreData.push(localscore);

    this.scoreData.sort((a, b) => (a.score > b.score ? -1 :1));

    //write to localstorage
    localStorage.setItem('maxscore', JSON.stringify(this.scoreData));
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
      /* NO MORE QUESTIONS */
      /* Store in array date, score */

      this.setScoreData(this.correctAnswers);
    }

    if (this.answer) {
      this.questionNumber++;
      if (this.answer.is_correct) {
        this.correctAnswers++;

      }
    }

    this.answer = null;
    this.disableRadioButtons = false;
    this.disableNextButton = true;
  }

  getCorrectAnswer() {
    if (this.question) {
      return this.question.answers.filter(answer => answer.is_correct)[0].answer;
    }
    return '';

  }

  answerSelected(event: MatRadioChange) {
    this.disableRadioButtons = true;
    this.disableNextButton = false;
  }

}
