import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Car } from '../../shared/interface/interface';
import { CarFeatures } from '../../services/car-features';

@Component({
  selector: 'app-car-list',
  imports: [],
  templateUrl: './car-list.html',
  styleUrl: './car-list.scss',
})
export class CarList implements AfterViewInit, OnDestroy {
  currentIndex: number = 0;
  cars: Car[] = [];
  
  private observer: IntersectionObserver | null = null;
  private animatedItems = new Set<string>();

  constructor(public carFeatures: CarFeatures) {
    this.cars = this.carFeatures.cars;
  }

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const carId = element.dataset['carId'];
            const specKey = element.dataset['specKey'];
            const identifier = `${carId}-${specKey}`;
            
            if (!this.animatedItems.has(identifier) && specKey === 'horsepower') {
              this.animatedItems.add(identifier);
              this.animateNumber(element);
            }
          }
        });
      },
      { threshold: 1 }
    );

    setTimeout(() => {
      document.querySelectorAll('[data-spec-key="horsepower"]').forEach((el) => {
        this.observer?.observe(el);
      });
    });
  }

  private animateNumber(element: HTMLElement) {
    const targetValue = parseInt(element.getAttribute('data-target-value') || '0', 10);
    const duration = 2000;
    const stepTime = 25;
    let current = 0;
    const steps = duration / stepTime;
    const increment = targetValue / steps;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        element.textContent = Math.floor(current).toString();
        clearInterval(interval);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, stepTime);
  }
}