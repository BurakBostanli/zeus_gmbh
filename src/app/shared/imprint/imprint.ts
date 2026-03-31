import { Component, Input } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Imprints } from '../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  imports: [Header, Footer],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})

export class Imprint {
  @Input() imprint: Imprints[] = [];
  title: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.imprint = nav?.extras?.state?.['data'] ?? [];
    this.title = nav?.extras?.state?.['title'] ?? '';
  }
}