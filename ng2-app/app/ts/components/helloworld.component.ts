import { Component } from "angular2/core";

@Component({
  selector : "hello-world",
  template : "<h1>{{ message }}</h1>"
})

export class HelloWorldComponent {
  message : string;

  constructor() {
    this.message = "Hello World!";
  }
}
