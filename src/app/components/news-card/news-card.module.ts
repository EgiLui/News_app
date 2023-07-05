import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsCardComponent } from './news-card.component';



@NgModule({
  declarations: [NewsCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [NewsCardComponent],
})
export class NewsCardModule { }
