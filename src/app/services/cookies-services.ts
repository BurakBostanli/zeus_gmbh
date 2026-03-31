import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CookiesServices {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  set(name: string, value: string, days: number = 365): void {
    if (!isPlatformBrowser(this.platformId)) return; 
    
    let cookieString = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;
    
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      cookieString += `; expires=${date.toUTCString()}`;
    }
    
    if (location.protocol === 'https:') {
      cookieString += '; Secure';
    }
    
    document.cookie = cookieString;
  }

  get(name: string): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [key, val] = cookie.trim().split('=');
      if (key === name) return decodeURIComponent(val || '');
    }
    return null;
  }

  delete(name: string): void {
    this.set(name, '', -1);
  }
}