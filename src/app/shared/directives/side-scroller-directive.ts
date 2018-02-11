import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
    selector: '[sideScroller]'
})
export class SideScrollerDirective {

    constructor(private el: ElementRef) { }

    @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
        this.handleScroll(event);
    }

    @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
        this.handleScroll(event);
    }

    @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
        this.handleScroll(event);
    }

    handleScroll(e) {
        // This can be changed to not scroll sideways with a flag or something
        // Number correlates to both side panel widths in SCSS, 17 correlates to scrollbar padding workaround width
        e.preventDefault();
        this.el.nativeElement.scrollLeft += e.deltaY ? e.deltaY : e.detail * 20;
    }
}