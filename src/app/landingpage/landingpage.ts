import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { CarList } from './car-list/car-list';

@Component({
  selector: 'app-landingpage',
  imports: [HeroSection, CarList],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {

}
