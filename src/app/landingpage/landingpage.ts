import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { CarList } from './car-list/car-list';
import { BenefitsSection } from './benefits-section/benefits-section';
import { Footer } from '../shared/footer/footer';
import { Contact } from './contact/contact';
import { CookieBanner } from '../shared/cookie-banner/cookie-banner';

@Component({
  selector: 'app-landingpage',
  imports: [HeroSection, Footer, CarList, BenefitsSection, Contact, CookieBanner],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {

}
