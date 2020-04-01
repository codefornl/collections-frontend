import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionListComponent } from './components/collection/list/list';
import { CollectionItemComponent } from './components/collection/item/item';
import { UsecaseItemComponent } from './components/usecase/item/item';

const routes: Routes = [
  { path: '', redirectTo: '/collections', pathMatch: 'full' },
  { path: 'collection/:id',      component: CollectionItemComponent, pathMatch: 'full' },
  { path: 'collection/:id/usecase/:uid',      component: UsecaseItemComponent, pathMatch: 'full' },
  { path: 'usecase/:uid',      component: UsecaseItemComponent, pathMatch: 'full' },
  { path: 'collections',      component: CollectionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
