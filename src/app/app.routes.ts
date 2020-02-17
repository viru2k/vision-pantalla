import { AuthGuard } from './guards/auth.guard';



import { Routes } from '@angular/router';



import { EmptyComponent } from './pages/info/empty/empty.component';
import { NotFoundComponent } from './pages/info/not-found/not-found.component';

export const ROUTES: Routes = [
    /** principal **/
    { path: 'inicio', component: EmptyComponent },
    { path: '404', component: NotFoundComponent },    
  

    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];



