import { Component } from '@angular/core';
import { Socials } from '../interface/interface';
import { RouterLink } from '@angular/router';
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
      imgPath: '/assets/icons/tiktokDefault.png',
      social: 'TikTok',
      link: 'https://www.tiktok.com/@zeus.gmbh',
    },
    {
      imgPath: '/assets/icons/instagramDefault.png',
      social: 'Instagram',
      link: 'https://www.instagram.com/zeus.gmbh_sportwagenvermietung?igsh=MThjNjJnaXN0aDAwOQ==',
    },
    {
      imgPath: '/assets/icons/googleDefault.png',
      social: 'Google',
      link: 'https://share.google/MnWkCUQxtdBc2R9VS',
    },
  ];

  imprint: Imprints[] = [
    {
      title: 'Angaben gemäß § 5 TMG',
      input: 'Zeus GmbH',
      description: ['Ringstraße 12', '85077 Manching'],
    },
    {
      title: 'Vertreten durch',
      description: ['Geschäftsführer: Mehmet Ali Onac'],
    },
    {
      title: 'Kontakt',
      description: ['Tel: +49 170 8297053', 'E-Mail: Info@zeus-auto.de'],
    },
    {
      title: 'Registereintrag',
      input: 'Eintragung im Handelsregister',
      description: [
        'Registergericht: Amtsgericht Ingolstadt',
        'Registernummer: [wird nachgereicht]',
      ],
    },
    {
      title: 'Umsatzsteuer-ID',
      input:
        'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
      description: ['[wird nachgereicht]'],
    },
    {
      title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      description: ['Mehmet Ali Onac', 'Keplerstraße 1', '85057 Ingolstadt'],
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
      description: [
        'Zeus GmbH',
        'Ringstraße 12',
        '85077 Manching',
        'Geschäftsführer: Mehmet Ali Onac',
        'E-Mail: Info@zeus-auto.de',
        'Tel: +49 170 8297053',
      ],
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
        'Diese Allgemeinen Geschäftsbedingungen gelten für alle Mietverträge zwischen der Zeus GmbH, Ringstraße 12 85077 Manching und dem Mieter.',
      ],
    },
    {
      title: 'Mietgegenstand',
      description: [
        'Die Zeus GmbH vermietet Fahrzeuge gemäß der jeweils aktuellen Fahrzeugliste.',
        'Der Mieter ist verpflichtet, das Fahrzeug pfleglich zu behandeln und die gesetzlichen Vorschriften einzuhalten.',
      ],
    },
    {
      title: 'Mietdauer und Rückgabe',
      description: [
        'Die Mietdauer ergibt sich aus dem jeweiligen Mietvertrag.',
        'Das Fahrzeug ist zum vereinbarten Zeitpunkt am vereinbarten Ort zurückzugeben.',
        'Bei verspäteter Rückgabe kann eine zusätzliche Tagesmiete berechnet werden.',
      ],
    },
    {
      title: 'Zahlung',
      description: [
        'Die Miete ist vor Übergabe des Fahrzeugs vollständig zu entrichten, sofern nichts anderes vereinbart wurde.',
        'Akzeptierte Zahlungsmittel sind Barzahlung, EC-Karte und Kreditkarte.',
      ],
    },
    {
      title: 'Haftung des Mieters',
      description: [
        'Der Mieter haftet für alle Schäden, die während der Mietzeit am Fahrzeug entstehen, soweit diese von ihm zu vertreten sind.',
        'Eine Haftungsreduzierung kann gegen gesonderte Vereinbarung und Aufpreis erfolgen.',
      ],
    },
    {
      title: 'Schlussbestimmungen',
      description: [
        'Es gilt das Recht der Bundesrepublik Deutschland.',
        'Gerichtsstand, soweit gesetzlich zulässig, ist Ingolstadt.',
      ],
    },
  ];
}
