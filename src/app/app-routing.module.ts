import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/tabla', 
    pathMatch: 'full'
  },
  { 
    path:"lista",
    component: ListComponent  
  },
  { 
    path:"tabla",
    component: TableComponent  
  },
  { 
    path:"**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
