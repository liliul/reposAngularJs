import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RenderJsonComponent } from './components/render-json/render-json.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'render-json', component: RenderJsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
