import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class ProductsModule {}
