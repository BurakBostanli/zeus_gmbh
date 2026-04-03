import { Component, Input, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Imprints } from '../interface/interface';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-imprint',
  imports: [Header, Footer],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint implements OnInit {
  @Input() imprint: Imprints[] = [];
  title: string = '';

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {
    const nav = this.router.getCurrentNavigation();
    this.imprint = nav?.extras?.state?.['data'] ?? [];
    this.title = nav?.extras?.state?.['title'] ?? '';
  }

  ngOnInit() {
    this.titleService.setTitle(`${this.title} – Zeus GmbH`);
    this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}