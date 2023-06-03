import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public addition = 0;
  public symptom = '';
  public level = '';

  constructor() { }

  ngOnInit(): void {
  }

  counter(data: string, value: number) {
    this.symptom = data;
    this.addition = this.addition + value;
    console.log(this.addition);
    if (this.symptom == 'total') {
      if (this.addition > 16) {
        this.level = 'i'
      } else if (this.addition <= 15 && this.addition >= 12) {
        this.level = 'ii'
      } else  if (this.addition <= 11 && this.addition >= 8) {
        this.level = "iii"
      } else  if (this.addition <= 7 && this.addition >= 3) {
        this.level = "iv"
      }
    }
  }

}
