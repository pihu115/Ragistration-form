import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

let headers = new Headers();
headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public User: any;
  public baseUrl = 'http://192.168.0.109:8080/TestP/web/add-user-detail';
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
