import { Component, Input } from '@angular/core';
import Photo from '../../models/photo';

@Component({
    selector: 'card',
    template: require('./card.component.html'),
    styles: [String(require('./card.component.scss'))]
})
export default class CardComponent {
    @Input() item: Photo;
}