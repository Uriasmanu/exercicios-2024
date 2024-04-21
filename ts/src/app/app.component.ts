import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  textExpanded: boolean = false;
  buttonText: string = 'Ver mais';
  textBoxHeight: string = '200px';

  toggleText() {
    this.textExpanded = !this.textExpanded;
    if (this.textExpanded) {
      this.textBoxHeight = 'auto';
      this.buttonText = '';
    } else {
      this.textBoxHeight = '200px';
      this.buttonText = 'Ver mais';
    }
  }
}


