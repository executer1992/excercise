import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './data/guards/UserGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'page1',
    loadChildren: () => import('./modules/page1/page1.module').then(m => m.Page1Module)
  },
  {
    path: 'page2',
    loadChildren: () => import('./modules/page2/page2.module').then(m => m.Page2Module),
    canActivate: [UserGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
