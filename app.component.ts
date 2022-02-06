import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolation
  appName = "Please enter your email address"

  //Property Binding
  clientName: string = "Jarell";

  //Style Binding
  appliedCssClass = "green";
  notappliedCSSClass = false;
  myColor = 'red';

  //twobinding
  showData($event:any){
    console.log("Button is clicked!"); if($event){
      console.log($event.target.value);
    }
  }


  getData(data:any)
  {
    console.warn(data)
  }
}
