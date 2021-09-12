import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent} from './user-details/user-details.component';
import { UsersComponent} from './users/users.component';
const routes: Routes = [
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'details/:id',
    component:UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
