
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class JsonService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getJson(url: string) {
        return this.httpClient.get(url);
    }
}
