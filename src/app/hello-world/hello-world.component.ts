import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  // template:'<p>Parrafo mostrado desde el componente</p>',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
