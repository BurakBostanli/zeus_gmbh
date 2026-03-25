import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { CarList } from './car-list/car-list';
import { BenefitsSection } from './benefits-section/benefits-section';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-landingpage',
  imports: [HeroSection, Footer, CarList, BenefitsSection],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {

}
