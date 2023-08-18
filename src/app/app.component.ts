import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teste2Plus2';
  resultShowed: boolean = false;

  toggleResult() {
    this.resultShowed = !this.resultShowed;
  }
}
