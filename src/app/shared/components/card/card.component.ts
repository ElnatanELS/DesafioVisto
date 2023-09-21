import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { Movie } from 'src/app/shared/models/movie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

   @Input() movie: Movie | undefined;
   @Output() viewEvent = new EventEmitter<number>();
   srcImage = environment.urlImage + 'w342'

   viewButton() {
    this.viewEvent.emit(this.movie?.id);
  }



}
