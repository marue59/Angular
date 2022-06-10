import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  time: string = '00:00:00';

}
