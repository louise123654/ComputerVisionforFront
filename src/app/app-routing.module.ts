import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

const routes: Routes = [
  // path: '/dashboard' PagerRouting
  // path: '/auth' AuthRouting
  // path: '/medicos' MedicosRouting
  // path: '/compras' ComprasRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagesfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
