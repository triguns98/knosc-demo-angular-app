import { HelloMessage } from './../models/hello-message.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  helloWorldBehaviourSubject: BehaviorSubject<HelloMessage> = new BehaviorSubject<HelloMessage>(<HelloMessage>{});

  constructor(private http: HttpClient) { }

  getHelloWorldMessage(){
    const url = "http://localhost:5000/hello";
    this.http.get<HelloMessage>(url).subscribe(
      (value) => this.notifyBehaviourSubject(value),
      err => console.log(err)
    );
  }

  notifyBehaviourSubject(value: HelloMessage): void {
    this.helloWorldBehaviourSubject.next(value);
  }
}
