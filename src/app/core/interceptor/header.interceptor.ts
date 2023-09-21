import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newHeaders = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODFiMmQyMDZjZGZlZjc2NzdkYjZiOTc2YWNmYzM5NSIsInN1YiI6IjVhMzEzYWUzMGUwYTI2NGNkMDE4YWU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0MskDy1smT8zRa9e0w1wGO-1dq9kLJR0Zh3oWIC0LE',
    });
    let clone = request.clone({ headers: newHeaders });
    return next.handle(clone);
  }
}
