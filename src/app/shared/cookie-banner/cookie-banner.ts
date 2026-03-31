import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CookiesServices } from '../../services/cookies-services';
import { Imprints } from '../interface/interface';

type Consent = 'necessary' | 'all' | 'custom';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cookie-banner.html',
  styleUrls: ['./cookie-banner.scss'],
})
export class CookieBanner implements OnInit {
  showBanner = true;
  analytics = false;
  @Input() imprint: Imprints[] = [];
  title: string = '';

cookies: Imprints[] = [
  {
    title: 'Cookie-Richtlinie',
    input: 'Was sind Cookies?',
    description: [
      'Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Website besuchen.',
      'Sie ermöglichen es der Website, Ihre Einstellungen zu speichern und die Nutzung zu verbessern.',
    ],
  },
  {
    title: 'Welche Cookies verwenden wir?',
    input: 'Technisch notwendige Cookies',
    description: [
      'Diese Cookies sind für den Betrieb der Website zwingend erforderlich.',
      'Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und das Speichern Ihrer Cookie-Einstellungen.',
      'Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.',
    ],
  },
  {
    title: 'Cookies im Kontaktformular',
    input: 'Erhobene Daten',
    description: [
      'Wenn Sie unser Kontaktformular nutzen, werden folgende Daten erhoben:',
      'Name',
      'E-Mail-Adresse',
      'Telefonnummer',
      'Gewünschtes Fahrzeug',
      'Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage per E-Mail weitergeleitet und nicht gespeichert.',
    ],
  },
  {
    title: 'Speicherdauer',
    description: [
      'Ihr Cookie-Consent wird für 365 Tage gespeichert.',
      'Nach Ablauf dieser Frist werden Sie erneut um Ihre Einwilligung gebeten.',
    ],
  },
  {
    title: 'Drittanbieter',
    description: [
      'Wir verwenden keine Cookies von Drittanbietern.',
      'Es findet keine Weitergabe Ihrer Daten an Werbenetzwerke oder Analysedienste statt.',
    ],
  },
  {
    title: 'Cookie-Einstellungen ändern',
    description: [
      'Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser ändern oder Cookies löschen.',
      'Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität der Website einschränken kann.',
    ],
  },
  {
    title: 'Kontakt',
    description: [
      'Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich an:',
      'E-Mail: Info@zeus-auto.de',
      'Tel: +49 170 8297053',
    ],
  },
];


  constructor(
    private cookieService: CookiesServices,
    private router: Router,
  ) {
    const nav = this.router.getCurrentNavigation();
    this.imprint = nav?.extras?.state?.['data'] ?? [];
    this.title = nav?.extras?.state?.['title'] ?? '';
  }

  ngOnInit() {
    const consent = this.cookieService.get('cookie_consent') as Consent | null;
    const analytics = this.cookieService.get('analytics');

    if (consent) {
      this.showBanner = false; // set showbanner flag here
      this.analytics = analytics === 'true';
      return;
    }

    this.showBanner = true;
    this.analytics = false;
  }

  acceptAll() {
    this.saveConsent('all', true);
  }

  acceptNecessary() {
    this.saveConsent('necessary', false);
  }

  saveSelection() {
    const consent: Consent = this.analytics ? 'custom' : 'necessary';
    this.saveConsent(consent, this.analytics);
  }

  closeBanner() {
    const consent = this.cookieService.get('cookie_consent');
    if (!consent) return;

    this.showBanner = false;
  }

  private saveConsent(consent: Consent, analytics: boolean) {
    this.cookieService.set('cookie_consent', consent, 365);
    this.cookieService.set('analytics', analytics ? 'true' : 'false', 365);
    this.analytics = analytics;
    this.showBanner = false;
  }
}
