import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialiconsComponent } from './components/socialicons/socialicons.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MaterialComponent } from './pages/material/material.component';
import { LayoutadminComponent } from './layouts/layoutadmin/layoutadmin.component';
import { NavigationadminComponent } from './components/navigationadmin/navigationadmin.component';
import { ProductsadminComponent } from './pages/productsadmin/productsadmin.component';
import { WarehauseadminComponent } from './pages/warehauseadmin/warehauseadmin.component';
import { CategoryadminComponent } from './pages/categoryadmin/categoryadmin.component';
import { TopbaradminComponent } from './components/topbaradmin/topbaradmin.component';
import { LayoutshopComponent } from './layouts/layoutshop/layoutshop.component';
import { FooteradminComponent } from './components/footeradmin/footeradmin.component';
import { CategoryaddComponent } from './pages/categoryadd/categoryadd.component';
import { ProductaddComponent } from './pages/productadd/productadd.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialiconsComponent,
    FooterComponent,
    TopbarComponent,
    NavigationComponent,
    ProductsComponent,
    ContactComponent,
    AboutmeComponent,
    BlogComponent,
    MaterialComponent,
    LayoutadminComponent,
    NavigationadminComponent,
    ProductsadminComponent,
    WarehauseadminComponent,
    CategoryadminComponent,
    TopbaradminComponent,
    LayoutshopComponent,
    FooteradminComponent,
    CategoryaddComponent,
    ProductaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
