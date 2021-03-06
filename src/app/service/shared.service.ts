import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
providedIn: 'root'
})
export class SharedService {
    sharedImagesNotification = new Subject<[any, number]>();
    observableImagesNotification = this.sharedImagesNotification.asObservable();
}