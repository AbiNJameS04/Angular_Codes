import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { LogoutComponent } from './logout/logout.component';
import { MerchantComponent } from './merchant/merchant.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"product",component:ProductComponent},
  {path:"merchant",component:MerchantComponent},
  {path:"logout",component:LogoutComponent},
  {path:"cproduct",component:CustomerProductComponent},
  {path:"404",component:NotAllowedComponent},
  {path:'**',component:NotAllowedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
