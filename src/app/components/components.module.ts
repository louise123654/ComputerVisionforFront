import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';

@NgModule({
  declarations: [
    ModalImagenComponent
  ],
  exports: [
    ModalImagenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})

export class ComponentsModule {}
