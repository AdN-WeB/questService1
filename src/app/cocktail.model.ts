export class Cocktail {
  nom: String;
  prix: Number;
  image: String;

  constructor(nom: String, prix: Number, image: String) {
    (this.nom = nom), (this.prix = prix), (this.image = image);
  }
}
