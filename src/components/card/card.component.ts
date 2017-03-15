import { Component, Input } from "@angular/core";

import Photo from "../../models/photo";

@Component({
    selector: "ac-card",
    styles: [String(require("./card.component.scss"))],
    template: require("./card.component.html"),
})
export default class CardComponent {
    @Input() item: Photo;

    stop(event: any) {
        event.stopPropagation();
    }
}