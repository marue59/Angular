import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filtree',
  templateUrl: './liste-filtree.component.html',
  styleUrls: ['./liste-filtree.component.scss']
})
export class ListeFiltreeComponent implements OnInit {

items: string[] = ["David Bowie", "Steevie Nicks", "Johnny Halliday", "Saul Hudson"]

  constructor() { }

  ngOnInit(): void {
  }

}
