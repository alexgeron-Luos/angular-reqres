import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'details',
    component: UserDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: AddUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
