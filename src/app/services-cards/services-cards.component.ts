import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-cards',
  templateUrl: './services-cards.component.html',
  styleUrls: ['./services-cards.component.scss']
})
export class ServicesCardsComponent {
  @Input() src:string
  @Input() title:string
  @Input() text:string
  
}
