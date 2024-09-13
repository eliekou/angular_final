import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
