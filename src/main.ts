import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {BookListComponent} from "./app/book-list/book-list.component";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";

const routes: Routes = [
  {path:'', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BookListComponent },
  { path: 'books/:id',
    loadComponent: ()=>
      import('./app/book-list-item/book-list-item.component').then(m=>m.BookListItemComponent) },
  {path:'modify-book  ',
    loadComponent: ()=>
      import('./app/modify-book/modify-book.component').then(m=>m.ModifyBookComponent) },
  {path: '**',
    loadComponent:()=>
      import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent) },
];
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  // importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:1}))

  ],
}).catch((err) => console.error(err));
