import { Component, HostListener } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  opacity = 1;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Zeus GmbH – Premium Sportwagen mieten in Bayern');
    this.meta.updateTag({ name: 'description', content: 'Exklusive Sportwagen wie BMW M4, Audi RS5 und mehr jetzt einfach online mieten. Ihr Mietwagenservice in Manching, Bayern.' });
  }

  ngOnInit(){
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const input = document.querySelector('.headline-wrapper');
    input?.classList.add('fade-in');
    this.opacity = Math.max(0, 1 - scrollY / vh);
  }
}