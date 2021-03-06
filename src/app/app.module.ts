import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './service/json.service';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import { GalleryComponent } from './gallery/gallery.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    CarouselModule,
    GalleriaModule,
    CommonModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
