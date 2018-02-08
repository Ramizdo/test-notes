import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { PageHeaderModule } from './../../shared';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, NotesRoutingModule, PageHeaderModule, FormsModule],
  declarations: [NotesComponent]
})
export class NotesModule {}
