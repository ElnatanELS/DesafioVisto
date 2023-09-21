import { MovieService } from './../../core/services/movie.service';
import { environment } from './../../../environments/environment';
import { MovieDetail } from '../../shared/models/movie-detail';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoadingComponent } from 'src/app/shared/components/loading/loading/loading.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: number | undefined;
  movieDetail: MovieDetail | undefined;
  srcImagens = environment.urlImage + 'original';
  loading = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getParamId();
    this.getMovieDetail();
  }

  getParamId() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.getAll('id');
    });
  }

  getMovieDetail() {
    this.loading = true;
    this.movieService.getMoviesDeteail(this.id!).subscribe((res) => {
      this.movieDetail = res;
      this.loading = false;
    });
  }
}
