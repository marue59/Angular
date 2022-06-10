import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-alert-button',
  templateUrl: './generic-alert-button.component.html',
  styleUrls: ['./generic-alert-button.component.scss']
})
export class GenericAlertButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  buttonTitle!: string;
  @Input()
  alerteMessage!: string;

  
  onClick(){
    alert(this.alerteMessage);
  }
}
