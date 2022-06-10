import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-menu',
  templateUrl: './time-menu.component.html',
  styleUrls: ['./time-menu.component.scss']
})
export class TimeMenuComponent implements OnInit {
  timezones: string[] = [
    'Europe/Paris',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal',
    'Asia/Tokyo',
    'Africa/Cairo',
  ];

  constructor() {}

  ngOnInit(): void {}

  setTime(timezone: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    const time = date.split(' ')[1];

    setInterval(() => {
      this.setTime(timezone);
    }, 1000);

    return time;
  }
}
