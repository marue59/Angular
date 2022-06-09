import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  nom: string = "Francois";
  prenom : string = "cloclo";
  imageUrl: string = "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2009/11/claude-francois-011.jpg?resize=230,275"
  job : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
