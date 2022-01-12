import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-app';
  name = 'Ashwini Mohapatra';

  selectedlang: string ='';
  listoflang: string[]=["English","Hindi","French","Turkish"];
  
  addLang(){
    console.log("Button Pressed");
    this.listoflang.push(this.selectedlang);
    console.log(this.listoflang);
  }
  deletelang(){
    this.listoflang.splice(this.listoflang.length-1,this.listoflang.length);
  }
}
