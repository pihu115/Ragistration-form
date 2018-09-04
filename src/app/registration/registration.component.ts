import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  register(user) {
    var uservar = {
      "fName": user.userName,
      "mName": user.mname,
      "lName": user.userLname,
      "mNo": user.mobileNumber,
      "gender": user.gender,
      "emailId": user.email,
      "password": user.userpass,
      "country": user.UserCountryName,
      "area": user.area
    }
    this.dataservice.RequestPost(this.dataservice.baseUrl, uservar).then(res => {
      console.log(res);
      this.dataservice.User = uservar;
      this.router.navigate(['home']);
    }).catch(err => {
      console.log(err);
    });
  }
}
