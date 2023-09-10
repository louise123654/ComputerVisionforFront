import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';

import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { PipesModule } from '../pipes/pipes.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { UsuarioComponent } from './mantenimientos/usuarios/usuario.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AcountSettingsComponent,
    PerfilComponent,
    UsuariosComponent,
    UsuarioComponent,
    BusquedaComponent,
  ],
  exports: [DashboardComponent, PagesComponent, AcountSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    PipesModule,
  ],
})
export class PagesModule {}
