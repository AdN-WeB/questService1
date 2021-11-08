import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CockailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(public cockailService:CocktailService ){
    // le service est stocké dans helloWorldService
}

  ngOnInit(): void {
    this.cocktails.push(
      new Cocktail(
        'Cuba Libre',
        7,
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cuisineaz.com%2Frecettes%2Fcuba-libre-62365.aspx&psig=AOvVaw3VrXD5JiFRY5-XMYhKreAX&ust=1636454509825000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCuh6HKiPQCFQAAAAAdAAAAABAD'
      ),
      new Cocktail(
        'pinacolada',
        7,
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.houra.fr%2Frecettes%2Fpina-colada-20280%2F&psig=AOvVaw3GnWTHv-aSkSjXnF6jdxdK&ust=1636454656056000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj3kejKiPQCFQAAAAAdAAAAABAD'
      ),
        new Cocktail(
          'Gin tonic',
          7,
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.destinationcocktails.fr%2Frecette%2Fhtonik%2F&psig=AOvVaw2WPwFWqOpjf25z27rF4vLb&ust=1636454733815000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC744rLiPQCFQAAAAAdAAAAABAE'
        )
    );
  }
}
