import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';

import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    PageHeaderModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM'
    })
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }
