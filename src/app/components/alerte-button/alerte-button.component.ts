import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerte-button',
  templateUrl: './alerte-button.component.html',
  styleUrls: ['./alerte-button.component.scss']
})
export class AlerteButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    alert("On t'a dit de pas cliquer !!! <3")
  }
}
