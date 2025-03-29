import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
export const routes: Route[] = [
    { path: '', component: UserListComponent },
    { path: ':id', component: UserDetailComponent },
  ];


@NgModule({
  declarations: [AppComponent, SearchPipe, UserDetailComponent, UserListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), RouterModule], 
  bootstrap: [AppComponent]
})
export class AppModule {}
