import { NgModule } from '@angular/core';
import { LocastorageService, MY_LOCAL_STORAGE } from './locastorage.service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    {provide: MY_LOCAL_STORAGE, useExisting: LOCAL_STORAGE},
    LocastorageService,

  ]
})
export class CoreModule {}
