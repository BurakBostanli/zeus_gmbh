import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactInfo, Car } from '../../shared/interface/interface';
import { CarFeatures } from '../../services/car-features';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterLink, FadeInOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  cars: Car[] = [];
  showMap: boolean = false;
  contactInput: ContactInfo[] = [
    {
      imgPath: 'assets/icons/mailDefault.png',
      title: 'E-Mail',
      description: ['info@auto-zeus.de'],
    },
    {
      imgPath: 'assets/icons/phoneDefault.png',
      title: 'Telefon',
      description: ['+49 (0) 170 8297053'],
    },
    {
      imgPath: 'assets/icons/whatsappDefault.png',
      title: 'WhatsApp',
      description: ['Hier klicken'],
    },
    {
      imgPath: '/assets/icons/locationDefault.png',
      title: 'Standort',
      description: ['Ingolstadt'],
    },
  ];

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    subject: '',
    message: '',
    consent: false,
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  localStorageKey = 'contactFormData';

  mailTest = false;

  post = {
    endPoint: 'https://formspree.io/f/xpwrbkvw',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  http = inject(HttpClient);

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private carFeatures: CarFeatures
  ) {
    this.loadFormData();
    this.cars = this.carFeatures.cars
  }

  ngOnInit() {
    this.titleService.setTitle(
      ' Zeus GmbH - Sportwagenvermietung - Premium Rental | Südbayern',
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        '',
    });
  }

  loadFormData() {
    const saved = localStorage.getItem(this.localStorageKey);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        this.formData = { ...this.formData, ...data };
      } catch (e) {
        console.error('Fehler beim Laden der Formulardaten:', e);
      }
    }
  }

  saveFormData() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.formData));
  }

  clearFormData() {
    localStorage.removeItem(this.localStorageKey);
  }

  onInputChange() {
    this.saveFormData();
  }

  onSubmit(ngForm: NgForm) {
    if (!this.formData.consent) {
      this.submitError = true;
      return;
    }

    if (ngForm.form.valid && !this.mailTest) {
      this.isSubmitting = true;
      this.submitError = false;

      const payload = {
        name: this.formData.name,
        email: this.formData.email,
        company: this.formData.company,
        package: this.formData.package,
        phone: this.formData.phone,
        subject: this.formData.subject,
        message: this.formData.message,
      };

      this.http
        .post(this.post.endPoint, this.post.body(payload), this.post.options)
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            ngForm.resetForm();
            this.clearFormData();

            this.formData = {
              name: '',
              email: '',
              phone: '',
              company: '',
              package: '',
              subject: '',
              message: '',
              consent: false,
            };
          },
          error: (error) => {
            this.isSubmitting = false;
            this.submitError = true;
            console.error('Senden fehlgeschlagen:', error);
          },
        });
    } else if (ngForm.form.valid && this.mailTest) {
      this.isSubmitting = false;
      this.submitSuccess = true;
      ngForm.resetForm();
      this.clearFormData();

      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        package: '',
        subject: '',
        message: '',
        consent: false,
      };
    } else {
      this.submitError = true;
    }
  }

  executeAction(title: string, value: string) {
    if (title === 'E-Mail') window.location.href = `mailto:${value}`;
    if (title === 'Telefon') window.location.href = `tel:${value}`;
    if (title === 'WhatsApp') window.open(`https://wa.me/${value.replace(/\D/g, '')}`, '_blank');
    if (title === 'Standort') window.open(`https://maps.google.com/?q=${value}`, '_blank');
  }
}