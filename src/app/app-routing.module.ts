import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// start this
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
// end this

const routes: Routes = [
  // start this
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "contact-create", component: ContactCreateComponent },
  { path: "contact-list", component: ContactListComponent },
  { path: 'products', component: ProductComponent, data: { title: 'Product List' } },
  { path: 'product-details/:id', component: ProductDetailComponent, data: { title: 'Product Details' } },
  { path: 'product-add', component: ProductAddComponent, data: { title: 'Product Add' } },
  { path: 'product-edit/:id', component: ProductEditComponent, data: { title: 'Product Edit' } }
  // end this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
