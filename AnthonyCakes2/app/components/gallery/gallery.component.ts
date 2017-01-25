﻿import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { YandexFotkiParserService } from './yandex-fotki-parser.service';
import { PhotoService } from './photo.service';

@Component({
    selector: 'gallery',
    template: require('./gallery.component.html'),
    styles: [require('./gallery.component.scss')],
    providers: [ YandexFotkiParserService, PhotoService ]
})
export class GalleryComponent implements OnInit {
    photos: string[];

    constructor(private photoService: PhotoService, private parserService: YandexFotkiParserService) { }

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this.photos = this.photoService.getPhotos('alekna', 'public');
    }
}