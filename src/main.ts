import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {BookListComponent} from "./app/book-list/book-list.component";
import {BookListItemComponent} from "./app/book-list-item/book-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyBookComponent} from "./app/modify-book/modify-book.component";

const routes: Routes = [
  {path:'', redirectTo: '/books', pathMatch: 'full'},
  { path: 'students', component: BookListComponent },
  { path: 'students/:id', component: BookListItemComponent },
  {path:'modify-student', component: ModifyBookComponent},
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
