﻿// jQuery
import 'jquery/dist/jquery.js';

// Tether
import 'tether/dist/css/tether.css';
import 'tether/dist/js/tether.js';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Common styles
import '../../common/main.scss';

import '../../rxjs-operators';

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: require('./app-root.component.html'),
    styles: [require('./app-root.component.scss')]
})
export class AppRootComponent {
    currentYear = new Date().getFullYear();
}