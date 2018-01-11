import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  htmlToAdd = '<div class="two">two</div>';
  textarea:string;



  test(){
     this.htmlToAdd = this.textarea;

  }
}
