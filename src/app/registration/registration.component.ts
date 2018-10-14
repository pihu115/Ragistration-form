import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router, public http: Http) { }

  ngOnInit() {

    //   var data = {
    //     "firstname": "vin", 
    //     "lastname": "Shinde", 
    //     "middlename": "vbnmm", 
    //     "mobile": "3456789098", 
    //     "email": "sdfgh@gmail.com", 
    //     "gender": "m"

    //     , "password": "123", "country": "ind", "area": "b"
    //   }
    //   debugger
    //   // this.http.post('http://127.0.0.1:8080/register/add', data);
    //   this.dataservice.testPost('http://127.0.0.1:8080/register/add', data).subscribe(
    //     function () {
    //       debugger;
    //     }
    //   )
  }




  register(user) {
    var uservar = {
      "firstname": user.userName,
      "middlename": user.mname,
      "lastname": user.userLname,
      "mobile": user.mobileNumber,
      "gender": user.gender,
      "email": user.email,
      "password": user.userpass,
      "country": user.UserCountryName,
      "area": user.area
    }
    console.log(uservar);
    this.dataservice.RequestPost(this.dataservice.baseUrl + 'add', uservar).then(res => {
      console.log(res);
      // this.dataservice.User = uservar;
      // this.router.navigate(['home']);
    }).catch(err => {
      console.log(err);
    });


  }
}
