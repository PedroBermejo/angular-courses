import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCreatedDate]'
})
export class CreatedDateDirective implements AfterViewInit{
  @Input('appCreatedDate') createdDate: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {  }

  ngAfterViewInit(): void {
    const now = new Date();
    const created = new Date(this.createdDate);

    if (created.getTime() > now.getTime()) {
      this.renderer.setStyle(this.el.nativeElement, 'border-style', 'solid');
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
    } else if ( this.getDiffDays(now, created) < 14 ) {
      this.renderer.setStyle(this.el.nativeElement, 'border-style', 'solid');
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
    }
  }

    getDiffDays(date1, date2) {
    return (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
  }

}
