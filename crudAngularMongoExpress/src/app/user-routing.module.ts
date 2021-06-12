import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos componentes para usar en las rutas
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';

// Creamos las rutas
const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: UserCreateComponent },
  { path: 'edit/:id', component: UserCreateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
