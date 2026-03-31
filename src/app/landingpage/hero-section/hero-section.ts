import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  opacity = 1;

  constructor() {
  }

  ngOnInit(){
  }



  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
        const input =  document.querySelector('.headline-wrapper');
      input?.classList.add('fade-in');

    this.opacity = Math.max(0, 1 - scrollY / vh);
  }

}