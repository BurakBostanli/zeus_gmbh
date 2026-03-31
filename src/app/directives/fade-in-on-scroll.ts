import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true
})
export class FadeInOnScrollDirective implements OnInit, OnDestroy {
  @Input() thresholdPx = 120;
  @Input() once = true;
  @Input() fadeClass = 'fade-in-x';
  @Input() fadeVisibleClass = 'fade-in-x-visible';

  private done = false;
  private removeScroll?: () => void;

  constructor(
    private el: ElementRef<HTMLElement>,
    private r: Renderer2,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.r.addClass(this.el.nativeElement, this.fadeClass);

    this.zone.runOutsideAngular(() => {
      this.removeScroll = this.r.listen('window', 'scroll', () => this.check());
      this.check();
    });
  }

  ngOnDestroy(): void {
    this.removeScroll?.();
  }

  private check(): void {
    if (this.once && this.done) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const viewH = window.innerHeight;

 if (rect.top <= viewH - this.thresholdPx) {
    // Hier fügst du fadeClass hinzu (falsch)
    // this.r.addClass(this.el.nativeElement, this.fadeClass);
    
    // Du musst fadeVisibleClass hinzufügen und fadeClass entfernen:
    this.r.addClass(this.el.nativeElement, this.fadeVisibleClass);
    this.done = true;
    if (this.once) this.removeScroll?.();
  }
  }
}