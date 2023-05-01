import { Component, HostListener, Renderer2,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HostListeners';

  constructor(private el:ElementRef,private renderer:Renderer2){}

  count:number=0;
  click:number=0;

  //  This is used for the when mouseover in any element that change the backgrund color of first element
  @HostListener('mouseover') mouseOver(){
    console.log("Mouse Over Called ...",this.count++);
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue');
  }

  @HostListener('mouseout') mouseOut(){
    console.log("Mouse Out Called ...",this.count--);
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','red');
  }

  @HostListener('click') myClick(){
    console.log("Clicked Called ...",this.click++);
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
  }

}
