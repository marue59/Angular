import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.scss']
})
export class CarteVisiteComponent implements OnInit {

user: any = {
    id: 1,
    name: "Defretin",
    username: "Marie",
    email: "marie.defretin@marie.fr",
    address: {
      street : "Kulas Light",
      suite : "Apt. 556",
      city : "Gwenborough",
      zipcode : "92998-3874",
      geo : {
        lat : "-37.3159",
        lng : "81.1496"
      }
    },
    phone : "06.19.33.19.93",
    website : "marieDefretin.fr",
    company : {
      name : "IB - Cegos",
      catchPhrase : "Multi-layered client-server neural-net",
      bs : "harness real-time e-markets"
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
