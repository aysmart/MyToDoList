import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyToDoList';
  password:string="";
  doSomething() : void {
      alert("I was here!");
      this.password = "1234wesaY**";
      $("#exampleInputPassword1").on("click", ()=>{
        this.password = "1234wesaY**";
        alert("Kai!!");
      });
  }

  

  

}
