import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { Footer } from './shared/footer/footer';
import { Imprint } from './shared/imprint/imprint';

export const routes: Routes = [
  { path: '', component: Landingpage },
  { path: 'impressum', component: Imprint },
    { path: 'datenschutz', component: Imprint },
    { path: 'agb', component: Imprint },

];
