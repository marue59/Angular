import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  buttons: any [] = [
    {
      buttonTitle: 'Philippe !',
      alerteMessage: "Je sais ou tu te caches ! "
    },
    {
      buttonTitle: 'Marco !',
      alerteMessage: "Je sais ou tu te caches ! "
    },
    {
      buttonTitle: 'bingo !',
      alerteMessage: "c'est gagné "
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
