import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbaseListComponent } from './cbase/cbase-list.component';
import { CbaseItemComponent } from './cbase/cbase-item.component';
import { UsecaseItemComponent } from './usecase/usecase-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/cbases', pathMatch: 'full' },
  { path: 'cbase/:id',      component: CbaseItemComponent, pathMatch: 'full' },
  { path: 'cbase/:id/usecase/:uid',      component: UsecaseItemComponent, pathMatch: 'full' },
  { path: 'cbases',      component: CbaseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
