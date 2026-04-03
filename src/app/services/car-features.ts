import { Injectable } from '@angular/core';
import { Car } from '../shared/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class CarFeatures {
  cars: Car[] = [
    {
      id: 2,
      category: 'Sportwagen',
      name: 'RS 5 Sportback',
      description:
        'Der Audi RS 5 Sportback ist ein leistungsstarker Sportwagen mit exklusiver Ausstattung und modernem Design.',
      price: 550,
      images: [
        '/assets/cars/rs5/rs5_1.jpeg',
        '/assets/cars/rs5/rs5_2.jpeg',
        '/assets/cars/rs5/rs5_3.jpeg',
      ],
      performance: [
        {
          key: 'horsepower',
          value: 450,
          label: 'Leistung',
          unit: 'PS',
          icon: '/assets/cars/icons/horsepower.png',
        },
        {
          key: 'acceleration',
          value: '3,9 Sekunden',
          label: 'Beschleunigung',
          icon: '/assets/cars/icons/speed.png',
        },
        {
          key: 'capacity',
          value: '5 Personen',
          label: 'Kapazität',
          icon: '/assets/cars/icons/persons.png',
        },
        {
          key: 'transmission',
          value: 'Automatik',
          label: 'Getriebe',
          icon: '/assets/cars/icons/gear.png',
        },
      ],
      highlights: ['Leistungsstark', 'Sportlich', 'Luxusausstattung'],
    }, {
      id: 3, // anpassen nach deiner Liste
      category: 'Sportwagen',
      name: 'M4 Competition',
      description:
        'Der BMW M4 Competition ist ein hochleistungsstarkes Coupé mit sportlichem Charakter und modernster Technik.',
      price: 550, // anpassen
      images: [
        '/assets/cars/m4/m4_1.jpeg',
        '/assets/cars/m4/m4_2.jpeg',
        '/assets/cars/m4/m4_3.jpeg',
        '/assets/cars/m4/m4_4.jpeg',

        '/assets/cars/m4/m4_5.jpeg',

        '/assets/cars/m4/m4_6.jpeg',

        '/assets/cars/m4/m4_7.jpeg',

      ],
      performance: [
        {
          key: 'horsepower',
          value: 510, // 375 kW → ~510 PS
          label: 'Leistung',
          unit: 'PS',
          icon: '/assets/cars/icons/horsepower.png',
        },
        {
          key: 'acceleration',
          value: '3,9 Sekunden',
          label: 'Beschleunigung',
          icon: '/assets/cars/icons/speed.png',
        },
        {
          key: 'capacity',
          value: '4 Personen', // Coupé, 4 Sitzplätze typisch (8 Spl. inkl. Fahrer laut Brief → 4 Sitzplätze real)
          label: 'Kapazität',
          icon: '/assets/cars/icons/persons.png',
        },
        {
          key: 'transmission',
          value: 'Automatik',
          label: 'Getriebe',
          icon: '/assets/cars/icons/gear.png',
        },
      ],
      highlights: ['Leistungsstark', 'Sportlich', 'Präzises Handling'],
    },
    {
      id: 4, // anpassen
      category: 'Sportwagen',
      name: 'M2',
      description:
        'Der BMW M2 ist ein kompaktes Hochleistungs-Coupé mit puristischem Fahrerlebnis und modernster M-Technologie.',
      price: 550, // anpassen
      images: [
        '/assets/cars/m2/m2_1.jpeg',
        '/assets/cars/m2/m2_2.jpeg',
      ],
      performance: [
        {
          key: 'horsepower',
          value: 460, // 338 kW → ~460 PS
          label: 'Leistung',
          unit: 'PS',
          icon: '/assets/cars/icons/horsepower.png',
        },
        {
          key: 'acceleration',
          value: '4,1 Sekunden',
          label: 'Beschleunigung',
          icon: '/assets/cars/icons/speed.png',
        },
        {
          key: 'capacity',
          value: '4 Personen', // S.1: 4 Sitzplätze
          label: 'Kapazität',
          icon: '/assets/cars/icons/persons.png',
        },
        {
          key: 'transmission',
          value: 'Automatik',
          label: 'Getriebe',
          icon: '/assets/cars/icons/gear.png',
        },
      ],
      highlights: ['Leistungsstark', 'Kompakt & Agil', 'Sportliches Design'],
    },
  ];

  selectedImage: string | null = null;
  selectedIndex = 0;
  selectedCarIndex = 0;
  touchStartY = 0;
  isHorizontalSwipe: boolean | null = null;
  currentIndexes: number[] = [];

  constructor() { }

  prevImage(carIndex: number): void {
    const current = this.currentIndexes[carIndex] || 0;
    const maxIndex = this.cars[carIndex].images.length - 1;
    this.currentIndexes[carIndex] = current === 0 ? maxIndex : current - 1;
  }

  nextImage(carIndex: number): void {
    const current = this.currentIndexes[carIndex] || 0;
    const maxIndex = this.cars[carIndex].images.length - 1;
    this.currentIndexes[carIndex] = current === maxIndex ? 0 : current + 1;
  }

  openImage(img: string, carIndex: number, imageIndex: number) {
    this.selectedImage = img;
    this.selectedCarIndex = carIndex;
    this.selectedIndex = imageIndex;
    document.body.classList.add('no-scroll');
  }
  closeImage() {
    this.selectedImage = null;
    document.body.classList.remove('no-scroll');
  }

  touchStartX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
    this.touchStartY = event.changedTouches[0].clientY;
    this.isDragging = false;
    this.isHorizontalSwipe = null;
  }

  onTouchMove(event: TouchEvent, carIndex: number) {
    const diffX = event.changedTouches[0].clientX - this.touchStartX;
    const diffY = event.changedTouches[0].clientY - this.touchStartY;

    if (this.isHorizontalSwipe === null) {
      this.isHorizontalSwipe = Math.abs(diffX) > Math.abs(diffY);
    }

    if (!this.isHorizontalSwipe) return; // vertikales Scrollen — nichts tun

    event.preventDefault();
    this.isDragging = true;
    this.dragOffsets[carIndex] = diffX;
  }

  onTouchEnd(event: TouchEvent, carIndex: number) {
    this.isDragging = false;
    this.dragOffsets[carIndex] = 0;

    if (!this.isHorizontalSwipe) return;

    const diff = this.touchStartX - event.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      this.nextImage(carIndex);
    } else {
      this.prevImage(carIndex);
    }

    this.isHorizontalSwipe = null;
  }

  nextModalImage() {
    const images = this.cars[this.selectedCarIndex].images;
    this.selectedIndex = (this.selectedIndex + 1) % images.length;
    this.selectedImage = images[this.selectedIndex];
  }

  prevModalImage() {
    const images = this.cars[this.selectedCarIndex].images;
    this.selectedIndex =
      (this.selectedIndex - 1 + images.length) % images.length;
    this.selectedImage = images[this.selectedIndex];
  }
  dragOffsets: number[] = [];
  isDragging = false;

  modalDragOffset = 0;
  isModalDragging = false;

  onModalTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
    this.isModalDragging = true;
  }

  onModalTouchMove(event: TouchEvent) {
    event.stopPropagation();
    const diff = event.changedTouches[0].clientX - this.touchStartX;
    this.modalDragOffset = diff;
  }

  onModalTouchEnd(event: TouchEvent) {
    const diff = this.touchStartX - event.changedTouches[0].clientX;
    this.isModalDragging = false;
    this.modalDragOffset = 0;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      this.nextModalImage();
    } else {
      this.prevModalImage();
    }
  }
}
