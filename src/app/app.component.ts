import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LogD';

  showSideBar: boolean = false;

  toggleSidebar() {
    this.showSideBar = !this.showSideBar;

  }
}