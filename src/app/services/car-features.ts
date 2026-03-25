import { Injectable } from '@angular/core';
import { Car } from '../shared/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class CarFeatures {
    cars: Car[] = [
    {
      id: 1,
      category: 'Supersportwagen',
      name: 'Ferrari 488 Pista',
      description:
        'Der Ferrari 488 Pista ist ein exklusiver Supersportwagen mit beeindruckender Leistung.',
      images: [
        '/assets/cars/488_pista/ferrari_488_pista_1.jpg',
        '/assets/cars/488_pista/ferrari_488_pista_2.jpg',
        '/assets/cars/488_pista/ferrari_488_pista_3.jpg'
      ],
      performance: [
        {
          key: 'horsepower',
          value: 720,
          label: 'Leistung',
          unit: 'PS',
          icon: '/assets/cars/icons/horsepower.png'
        },
        {
          key: 'acceleration',
          value: '2,9 Sekunden',
          label: 'Beschleunigung',
          icon: '/assets/cars/icons/speed.png'
        },
        {
          key: 'capacity',
          value: '2 Personen',
          label: 'Kapazität',
          icon: '/assets/cars/icons/persons.png'
        },
        {
          key: 'transmission',
          value: 'Automatik',
          label: 'Getriebe',
          icon: '/assets/cars/icons/gear.png'
        }
      ],
      highlights: [
        'Leistungsstark',
        'Rennsporttauglich',
        'Luxusausstattung'
      ]
    },
    {
      id: 3,
      category: 'SUV / Geländewagen',
      name: 'Mercedes-AMG G63',
      description:
        'Der Mercedes-AMG G63 kombiniert Luxus, Kraft und Offroad-Performance in einer ikonischen G-Klasse.',
      images: [
        '/assets/cars/g63/mercedes_amg_g63_1.jpg.jpg'
      ],
      performance: [
        {
          key: 'horsepower',
          value: 585,
          label: 'Leistung',
          unit: 'PS',
          icon: '/assets/cars/icons/horsepower.png'
        },
        {
          key: 'acceleration',
          value: '4,5 Sekunden',
          label: 'Beschleunigung',
          icon: '/assets/cars/icons/speed.png'
        },
        {
          key: 'capacity',
          value: '5 Personen',
          label: 'Kapazität',
          icon: '/assets/cars/icons/persons.png'
        },
        {
          key: 'transmission',
          value: 'Automatik',
          label: 'Getriebe',
          icon: '/assets/cars/icons/gear.png'
        }
      ],
      highlights: [
        'Offroad-Performance',
        'Luxusinterieur',
        'Ikonisches Design'
      ]
    }];

}
