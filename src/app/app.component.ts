import { Component } from '@angular/core';

@Component({
  selector: 'reddit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
  addArticle(title: HTMLInputElement,link: HTMLInputElement): boolean {
  	console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  	return false;
  }
  /*Typescript: Como decir en javascript: 
  addArticle(title,link){
	console.log('Adding article title: '+title.value+' and link: '+link.value);
	return false;
  }
  Esta función se identifica como una función con retorno de tipo booleano. 
  Notese la sintaxis de la declaración de la función y la declaración de las cadenas usando el acento invertido: `
  */
}


