import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './components/comida/categoria/categoria.component';



const rutas: Routes = [
  {path: 'Categorias', component: CategoriaComponent},
];

export const appRoutes =  RouterModule.forRoot(rutas, {useHash: true});
