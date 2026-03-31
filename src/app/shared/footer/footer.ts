import { Component } from '@angular/core';
import { Socials } from '../interface/interface';
import { RouterLink } from "@angular/router";
import { Imprints } from '../interface/interface';


@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  socials: Socials[] = [
    {
      imPath: '/assets/icons/tiktokDefault.png',
      social: 'TikTok',
      link: 'https://www.tiktok.com/@zeus.gmbh',
    },
        {
      imPath: '/assets/icons/instagramDefault.png',
      social: 'Instagram',
      link: 'https://www.instagram.com/zeus.gmbh_sportwagenvermietung?igsh=MThjNjJnaXN0aDAwOQ==',
    },
  ];

    imprint: Imprints[] = [
    {
      title: 'Angaben gemäß § 5 TMG',
      input: 'Premium Rental GmbH',
      description: ['Luxusstraße 123', '10115 Berlin'],
    },
    {
      title: 'Vertreten durch',
      description: ['Geschäftsführer: Max Mustermann, Anna Musterfrau'],
    },
    {
      title: 'Kontakt',
      description: [
        'Tel: +49 170 8297053',
        'Name: Daniel Isanov',
        'E-Mail: Info@zeus-auto.de',
      ],
    },
    {
      title: 'Registereintrag',
      input: 'Eintragung im Handelsregister',
      description: [
        'Registergericht: Amtsgericht Berlin-Charlottenburg',
        'Registernummer: HRB 123456 B',
      ],
    },
    {
      title: 'Umsatzsteuer-ID',
      input:
        'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
      description: ['DE123456789'],
    },
    {
      title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      description: ['Max Mustermann', 'Luxustrasse 123', '85051 Ingolstadt'],
    },
    {
      title: 'EU-Streitschlichtung',
      description: [
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
        'https://ec.europa.eu/consumers/odr/',
        'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
      ],
    },
    {
      title: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
      description: [
        'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      ],
    },
    {
      title: 'Haftungsausschluss',
      input: 'Haftung für Inhalte',
      description: [
        'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.',
      ],
    },
    {
      title: 'Haftung für Links',
      description: [
        'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      ],
    },
    {
      title: 'Urheberrecht',
      description: [
        'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      ],
    },
  ];

  datenschutz: Imprints[] = [
  {
    title: 'Datenschutzerklärung',
    input: 'Verantwortlicher',
    description: ['Daniel Isanov', 'Luxustrasse 123', '85051 Ingolstadt', 'E-Mail: Info@zeus-auto.de'],
  },
  {
    title: 'Erhebung und Speicherung personenbezogener Daten',
    input: 'Beim Besuch unserer Website',
    description: [
      'IP-Adresse des anfragenden Rechners',
      'Datum und Uhrzeit des Zugriffs',
      'Name und URL der abgerufenen Datei',
      'Website, von der aus der Zugriff erfolgt (Referrer-URL)',
      'Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners',
    ],
  },
  {
    title: 'Ihre Rechte',
    description: [
      'Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten',
      'Berichtigung unrichtiger personenbezogener Daten',
      'Löschung Ihrer bei uns gespeicherten Daten',
      'Einschränkung der Datenverarbeitung',
      'Widerspruch gegen die Verarbeitung Ihrer Daten',
      'Datenübertragbarkeit',
    ],
  },
  {
    title: 'Cookies',
    input: 'Einsatz von Cookies',
    description: [
      'Unsere Website verwendet Cookies. Das sind kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden.',
      'Die meisten der von uns verwendeten Cookies sind sogenannte Session-Cookies, die nach Ende Ihres Besuchs automatisch gelöscht werden.',
    ],
  },
  {
    title: 'Kontaktformular',
    description: [
      'Bei Ihrer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten zur Bearbeitung der Anfrage gespeichert.',
      'Eine Weitergabe an Dritte erfolgt nicht.',
    ],
  },
  {
    title: 'Änderung der Datenschutzerklärung',
    description: [
      'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.',
      'Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.',
    ],
  },
];
agb: Imprints[] = [
  {
    title: 'Geltungsbereich',
    description: [
      'Diese Allgemeinen Geschäftsbedingungen gelten für alle Mietverträge zwischen Zeus GmbH und dem Mieter.',
    ],
  },
  {
    title: 'Mietgegenstand',
    description: [
      'Zeus GmbH vermietet Fahrzeuge gemäß der jeweils aktuellen Fahrzeugliste.',
      'Der Mieter ist verpflichtet, das Fahrzeug pfleglich zu behandeln.',
    ],
  },
  {
    title: 'Mietdauer und Rückgabe',
    description: [
      'Die Mietdauer ergibt sich aus dem Mietvertrag.',
      'Das Fahrzeug ist zum vereinbarten Zeitpunkt am vereinbarten Ort zurückzugeben.',
      'Bei verspäteter Rückgabe wird eine zusätzliche Tagesmiete berechnet.',
    ],
  },
  {
    title: 'Zahlung',
    description: [
      'Die Miete ist vor Antritt der Fahrt zu entrichten.',
      'Akzeptierte Zahlungsmittel: Bar, EC-Karte, Kreditkarte.',
    ],
  },
  {
    title: 'Haftung des Mieters',
    description: [
      'Der Mieter haftet für alle Schäden, die während der Mietzeit am Fahrzeug entstehen.',
      'Eine Haftungsreduzierung ist gegen Aufpreis möglich.',
    ],
  },
  {
    title: 'Schlussbestimmungen',
    description: [
      'Es gilt das Recht der Bundesrepublik Deutschland.',
      'Gerichtsstand ist Ingolstadt.',
    ],
  },
];

}
