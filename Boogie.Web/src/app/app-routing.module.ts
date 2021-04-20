import { WarehauseadminComponent } from './pages/warehauseadmin/warehauseadmin.component';
import { CategoryadminComponent } from './pages/categoryadmin/categoryadmin.component';
import { MaterialComponent } from './pages/material/material.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ProductsComponent } from './pages/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutadminComponent } from './layouts/layoutadmin/layoutadmin.component';
import { ProductsadminComponent } from './pages/productsadmin/productsadmin.component';
import { LayoutshopComponent } from './layouts/layoutshop/layoutshop.component';

const routes: Routes = [
  // { path: '', redirectTo: 'shop/products', pathMatch: 'full' },
  // { path: 'products', component: ProductsComponent },
  // { path: 'aboutme', component: AboutmeComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'material', component: MaterialComponent },
  {
    path: '', component: LayoutshopComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'aboutme', component: AboutmeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'material', component: MaterialComponent },
    ]
  },
  {
    path: 'admin', component: LayoutadminComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsadminComponent },
      { path: 'category', component: CategoryadminComponent },
      { path: 'warehouseadmin', component: WarehauseadminComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
