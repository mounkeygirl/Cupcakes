import { Component, OnInit } from '@angular/core';
import {Muffin} from '../muffin';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  chocolate_chip:Muffin={
    id:1,
    flavor:"Chocolate Chip"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
