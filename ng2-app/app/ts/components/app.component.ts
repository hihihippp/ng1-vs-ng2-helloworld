import { Component } from "angular2/core";
import { HelloWorldComponent } from "./helloworld.component";

@Component({
  selector : "my-app",
  template :`
  <div>
    <hello-world></hello-world>
  </div>`,
  directives : [HelloWorldComponent]
})

export class AppComponent {}
