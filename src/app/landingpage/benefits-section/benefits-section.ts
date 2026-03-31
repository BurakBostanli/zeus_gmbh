import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { InsuranceFeature } from '../../shared/interface/interface';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll';

@Component({
  selector: 'app-benefits-section',
  imports: [FadeInOnScrollDirective],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.scss',
})
export class BenefitsSection implements AfterViewInit {
  @ViewChild('hyphen') hyphen!: ElementRef;

  insurance: InsuranceFeature[] = [
    {
      title: 'Vollkasko inklusive',
      description:
        'Rundum geschützt unterwegs – ohne Selbstbeteiligung und versteckte Kosten.',
      iconUrl: '/assets/icons/insurance.png',
    },
    {
      title: '24/7 Verfügbarkeit',
      description:
        'Flexibel abholen und zurückgeben. Wir sind immer für Sie erreichbar.',
      iconUrl: '/assets/icons/time.png',
    },
    {
      title: 'Premium-Ausstattung',
      description:
        'Nur Fahrzeuge der neuesten Generation mit exklusiver Vollausstattung.',
      iconUrl: '/assets/icons/premium.png',
    },
    {
      title: 'Persönlicher Service',
      description:
        'Individuelle Beratung und maßgeschneiderte Lösungen für Ihre Bedürfnisse.',
      iconUrl: '/assets/icons/service.png',
    },
  ];

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.hyphen');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.7 },
    );

    elements.forEach((el) => observer.observe(el));
  }
}
