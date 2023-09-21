import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { Movie } from 'src/app/shared/models/movie';
import { rangeNumber } from 'src/app/shared/utils/rangeNumber';
import { MovieService } from './../../core/services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatIconModule, MatInputModule, MatPaginatorModule,  ReactiveFormsModule, FormsModule, LoadingComponent],
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
  form: FormGroup = new FormGroup({
    title: new FormControl(),
    year: new FormControl({value:'',disabled:true}),
  });
  constructor(private movieService:MovieService, private router:Router){}

  ngOnInit(): void {
    this.disabledYear()
    this.getMovies(this.pageIndex)
  }

  disabledYear(){
    this.form.valueChanges.subscribe(
      (value) => {
        if(value.title != ''){
          this.form.controls['year'].enable()
        } else {
          this.form.controls['year'].disable()

        }
      }
    )
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
  getSearchMovies(pages:number){
    this.loading = true;
    console.log(this.form.value);

    this.movieService.getSearchMovie(pages + 1, this.form.value.title, this.form.value.year).subscribe(
      res => {
        this.length = res.total_results;
        this.pageIndex = res.page - 1;
        this.movies = res.results;
        this.loading = false;

      }
    )
  }

  resetForm(){
    this.form.reset();
    this.form.controls['year'].disable()
    this.getMovies(0)
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
