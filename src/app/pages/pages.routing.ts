import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';
import { UsuarioComponent } from './mantenimientos/usuarios/usuario.component';

const routes: Routes = [
    {
        path       : 'dashboard',
        component  : PagesComponent,
        canActivate: [AuthGuard],
        children   : [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'account-settings', component: AcountSettingsComponent, data: { titulo: 'Ajustes de cuenta' } },
            { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas' } },
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' } },
        
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: 'usuario/:id', component: UsuarioComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            //Rutas de Mantenimiento
            // { path: 'usuarios', canActivate: [AdminGuard], component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            // { path: 'usuario/:id', canActivate: [AdminGuard], component: UsuarioComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}