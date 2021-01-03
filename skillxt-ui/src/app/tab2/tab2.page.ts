import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,

} from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private renderer: Renderer2) {}

  array: string[] = ['abc', 'def', 'ghi'];
  @ViewChild('div') div: ElementRef;

  refresh() {
    this.array.forEach(element => {
      const ionItem: HTMLParagraphElement = this.renderer.createElement('ion-item');
      ionItem.innerHTML = element;
      this.renderer.appendChild(this.div.nativeElement, ionItem);
    });
  }

  ngOnInit(): void {
  }
}
