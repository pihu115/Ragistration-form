import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

let headers = new Headers();
headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public User: any;
  //public baseUrl = 'http://c94bd270.ngrok.io/register/add';
  public baseUrl = 'http://localhost:8080/register/';
  constructor(public http: Http) { }

  RequestPost(URL, Data) {

    return new Promise((resolve, reject) => {
      this.http.post(URL, JSON.stringify(Data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  testPost(URL, Data) {
    return this.http.post(URL, Data);

  }

  RequestGet(URL) {
    return new Promise((resolve, reject) => {
      this.http.get(URL, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
}
