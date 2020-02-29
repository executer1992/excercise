import { NgModule } from '@angular/core';
import { Page1Component } from './page1.component';
import { Page1RoutingModule } from './page1-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../data/services/user.service';

@NgModule({
  declarations: [Page1Component],
  imports: [
    SharedModule,
    Page1RoutingModule
  ]
})
export class Page1Module { }
