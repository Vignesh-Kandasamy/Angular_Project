import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen=false;

    //open and close the dropdown by clicking the same element
    // @HostListener('click')toggleOpen()
    // {
    //     this.isOpen=!this.isOpen;
    // }

    //close the dropdown by selecting anywherein the page
    @HostListener("document:click",['$event'])toggleOpen(event:Event)
    {
        this.isOpen=this.elRef.nativeElement.contains(event.target)?!this.isOpen:false;
    }
    constructor(private elRef:ElementRef){

    }
}