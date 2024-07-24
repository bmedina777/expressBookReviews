import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name:string ='iron Man';
 public age:number =45;

 get capitalizedName():string {
  return this.name.toUpperCase(); 
 }
  getHeroDescription():string
  {
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name="Thor";
  }
  changeAge():void{
    this.age=50;
  }
  resetForm():void{
    this.age=45;
    this.name='iron Man';
    /*document.querySelectorAll('h1')!.forEach(element=>{
      element.innerHTML='<h1>Desde Angular con Ts</h1>';
    });*/
  }
}
