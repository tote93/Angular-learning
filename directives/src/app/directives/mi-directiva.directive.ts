import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[MiDirectiva]',
})
export class MiDirectivaDirective {
  constructor(public el: ElementRef, public renderer: Renderer2) {}
  /* 
  @Input() MiDirectiva: boolean;
  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  hover(flag: boolean): void {
    if (flag) this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    else this.renderer.setStyle(this.el.nativeElement, 'color', '');
  }
  }*/
  @Input() color: string;
  @Input() underline: boolean;
  ngOnInit(): void {
    console.log('entro:', this.color, this.underline);
    this.el.nativeElement.style.color = this.color;
    this.el.nativeElement.style.textDecoration = this.underline ? "underline" : "";
  }
}
