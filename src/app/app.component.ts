import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Desarrollo ';
  a = 8;
  b = 3;
  nombre = '';
  nombre2 = '';
  listo = false;

  constructor(){
    setTimeout(() => {
      this.listo = false;
    }, 3000);
  }
  hacerAlgo(){
    alert("haciendo algo");
  }
}
