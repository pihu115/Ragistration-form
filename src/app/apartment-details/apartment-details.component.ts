import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  apartmentName: string;
  apartmentDetails: any;

  constructor(private dataservice: DataService) { }

  ngOnInit() {

  }
  getApartmentDetails(apartment) {



    this.dataservice.RequestGet('http://localhost:8080/Registore/apartment/register/' + apartment.aName)
      .then((res: any) => {
        console.log(res);
        this.apartmentDetails = res.result[0];
      }).catch(err => {
        console.log(err);
        alert("Error in service")
      });


  }


}
