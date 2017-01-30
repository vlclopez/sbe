import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'AnyBody!';
  setName(name:string){
    this.name=name;
    
  }
  imgUrl="assets/img.png";
}
