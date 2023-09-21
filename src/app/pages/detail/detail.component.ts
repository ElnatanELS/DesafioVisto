import { environment } from './../../../environments/environment';
import { MovieDetail } from '../../shared/models/movie-detail';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

   movieDetail: MovieDetail = {
    "adult": false,
    "backdrop_path": "/55Rb9qt3yzyF4KQpC1c3T3Fbcao.jpg",
    "belongs_to_collection": {
      "id": 1162328,
      "name": "Talk to Me Collection",
      "poster_path": "/oNG1XQpMTbAuItS10y7pTSURwyG.jpg",
      "backdrop_path": "/brtSrbFFfYB9liimgRzBb0JHaaz.jpg"
    },
    "budget": 4500000,
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "homepage": "https://falecomigofilme.com.br",
    "id": 1008042,
    "imdb_id": "tt10638522",
    "original_language": "en",
    "original_title": "Talk to Me",
    "overview": "Quando um grupo de amigos descobre como conjurar espíritos usando uma antiga mão embalsamada, eles ficam viciados na nova emoção. Até que um deles vai longe demais e abre a porta para o mundo espiritual.",
    "popularity": 2583.568,
    "poster_path": "/n2HcaD1dEVrwXlSFJD7GmcqHSxv.jpg",
    "production_companies": [
      {
        "id": 32301,
        "logo_path": "/5VG9QRUCSDez359VNqcTmOLOH3C.png",
        "name": "Causeway Films",
        "origin_country": "AU"
      },
      {
        "id": 110175,
        "logo_path": "/eOGU7DcaBNq1KemTPkQuVWMX8L2.png",
        "name": "Metrol Technology",
        "origin_country": "GB"
      },
      {
        "id": 7584,
        "logo_path": "/eGkfvvyf4fJTvBUR1xt1669IPA3.png",
        "name": "Screen Australia",
        "origin_country": "AU"
      },
      {
        "id": 2806,
        "logo_path": "/vxOhCbpsRBh10m6LZ3HyImTYpPY.png",
        "name": "South Australian Film Corporation",
        "origin_country": "AU"
      },
      {
        "id": 61922,
        "logo_path": "/aGPysvtFfH8d8UjekpZD3GT9m7k.png",
        "name": "Bankside Films",
        "origin_country": "GB"
      },
      {
        "id": 5056,
        "logo_path": "/583ITs4w9sK31FnJwKiRwapTpzb.png",
        "name": "Head Gear Films",
        "origin_country": "GB"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "AU",
        "name": "Australia"
      },
      {
        "iso_3166_1": "GB",
        "name": "United Kingdom"
      }
    ],
    "release_date": "2023-07-26",
    "revenue": 68859794,
    "runtime": 95,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "Te pega pela mão e leva direto para o inferno.",
    "title": "Fale Comigo",
    "video": false,
    "vote_average": 7.269,
    "vote_count": 674
  }
  srcImagens = environment.urlImage + 'original'


}
