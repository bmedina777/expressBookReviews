import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') TagInput!: ElementRef<HTMLInputElement>;
  

  constructor(private GifsService:GifsService){}

  searchTag() {

    const newTag = this.TagInput.nativeElement.value;
    console.log({ newTag });
    this.GifsService.searchTag(newTag);
    this.TagInput.nativeElement.value='' 
  }

  ngAfterViewInit() {
    // Puedes realizar acciones adicionales después de que el elemento haya sido inicializado
  }
}
