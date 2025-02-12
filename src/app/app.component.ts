import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonFunctionsComponent } from './common-functions/common-functions.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonFunctionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'functions-exercises';
}
