import { Router } from '@angular/router';
import { MovieService } from './../../core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { Movie } from 'src/app/shared/models/movie';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { range, Observable } from 'rxjs';
import { rangeNumber } from 'src/app/shared/utils/rangeNumber';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule],
  providers: [MovieService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  length = 50;
  pageSize = 20;
  pageIndex = 0;
  movies:Movie[] =[]

  years = rangeNumber(1960,2023)


  hidePageSize = true;
  showPageSizeOptions = true;
  showFirstLastButtons = false;
  disabled = false;
  loading = false;
  constructor(private movieService:MovieService, private router:Router){}

  ngOnInit(): void {
    this.getMovies(this.pageIndex)

  }




  getMovies(pages:number){
    this.loading = true;
    this.movieService.getMovies(pages + 1).subscribe(
      res => {
        this.length = res.total_results;
        this.pageIndex = res.page - 1;
        this.movies = res.results;
        this.loading = false;

      }
    )
  }

  handlePageEvent(e: PageEvent) {

    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getMovies(e.pageIndex)
  }

  rediretcToDetail(e:any){
    this.router.navigate(['/detail/' + e]);
  }



}
