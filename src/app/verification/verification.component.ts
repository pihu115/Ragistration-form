import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  userDetails: any;

  constructor(private dataservice: DataService
  ) { }

  ngOnInit() {
  }

  verify(userVerify) {
    this.userDetails = null;
    console.log(userVerify);




    let userDetails = {
      'email': userVerify.email,
      'mobile': userVerify.mobileNumber
    }
    this.dataservice.RequestPost(this.dataservice.baseUrl + 'getdata/', userDetails).then(res => {
      console.log(res);
      this.userDetails = res;
    }).catch(err => {
      console.log(err);
    });


  }


}
