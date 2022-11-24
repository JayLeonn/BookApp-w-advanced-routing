import { BookdetailsComponent } from './detail/book-details/book-details.component';
import { CalculatorContainerComponent } from './calculators/calculator-container/calculator-container.component';
import { BooklistComponent } from './booklist/booklist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BooklistComponent },
  { path: 'calculators', component: CalculatorContainerComponent },
  /* { path: 'book/:id', component: BookdetailsComponent },  add this path to detail.module! */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
