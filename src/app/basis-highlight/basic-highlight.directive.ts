
//import { Directive, ElementRef, OnInit } from "@angular/core";
import { Directive, Renderer2, OnInit ,ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector :'[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor: string;
    //constructor(private elementRf:ElementRef){}
    constructor(private renderer:Renderer2, private elementRf:ElementRef){}

    ngOnInit(){
        //this.elementRf.nativeElement.style.backgroundColor = 'green';
        //this.renderer.setStyle(this.elementRf.nativeElement, 'backgroundColor','orange');
        this.backgroundColor = 'orange';
    }

    @HostListener('mouseenter') mouseover(eventDta: Event){
        this.renderer.setStyle(this.elementRf.nativeElement, 'backgroundColor','blue');
        this.backgroundColor = 'transparent';
    }
}