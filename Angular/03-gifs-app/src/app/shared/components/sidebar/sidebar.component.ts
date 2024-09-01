import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html', // Corrige el nombre de la propiedad (styleUrls y templateUrl)
    styleUrls: ['./sidebar.component.css'], // Corrige 'styleUrl' a 'styleUrls'
})
export class SidebarComponent { 
    constructor(private gifsService: GifsService) { }

    get tags():string[]{
        return this.gifsService.tagsHistory;
    }
    searchTag( tag: string):void
    {
        this.gifsService.searchTag(tag);
    }
}
