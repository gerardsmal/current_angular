import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  @Input() appHighlight = ''  // input del parametro che passiamo 

  constructor(private element: ElementRef) {
   }

   @HostListener('mouseenter') onMouseEnter(){
      this.cambiaColore(this.appHighlight);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.cambiaColore('transparent');
   }


   cambiaColore(colore:string){
      this.element.nativeElement.style.backgroundColor = colore;
   }
}
