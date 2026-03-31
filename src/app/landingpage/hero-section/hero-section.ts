import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  opacity = 1;

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    this.opacity = Math.max(0, 1 - scrollY / vh);
  }
}