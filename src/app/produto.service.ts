import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProdutoService{

    private baseUrl = 'http://localhost:8080/api/v1/produtos';

    constructor(private http: HttpClient) { }


    getProdutoList(): Observable<any>{
        return this.http.get(`${this.baseUrl}`)
    }

    createProduto(produto: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, produto);
    }
}