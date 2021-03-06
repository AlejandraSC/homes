import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//components and service
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JsonService } from './service/json.service';
//primeng imports
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';


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
    CommonModule,
    ButtonModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
