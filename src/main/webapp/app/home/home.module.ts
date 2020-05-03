import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App02SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [App02SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class App02HomeModule {}
