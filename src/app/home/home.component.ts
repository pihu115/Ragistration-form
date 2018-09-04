import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private dataservice: DataService) {
    this.user = this.dataservice.User;
    this.user = JSON.stringify(this.dataservice.User);
    console.log(this.user);
  }

  ngOnInit() {
  }

}
