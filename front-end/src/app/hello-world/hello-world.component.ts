import { HelloWorldService } from './../services/hello-world.service';
import { Component, OnInit } from '@angular/core';
import { HelloMessage } from '../models/hello-message.model';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  helloMessage: HelloMessage= <HelloMessage>{};
  constructor(private helloWorldService: HelloWorldService) {
   }

  ngOnInit(): void {
    this.initMessageSubscription();
    this.getHelloWorldMessage();
  }

  initMessageSubscription(){
    this.helloWorldService.helloWorldBehaviourSubject
    .subscribe(
      next => this.helloMessage = next
    )
  }

  getHelloWorldMessage() {
    this.helloWorldService.getHelloWorldMessage();
  }

}

