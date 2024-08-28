import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private baseUrl = 'http://127.0.0.1:5000/api'; // Asegúrate de que esta URL apunte a tu backend

  constructor(private http: HttpClient) {}

  // Obtener la lista de productos desde MySQL
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  // Registrar un nuevo producto en el inventario
  addInventory(inventoryData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/inventory`, inventoryData);
  }

  // Obtener el inventario 
  getInventory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/inventory`);
  }

  // Marcar un producto como entregado
  deliverProduct(serialNumber: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/inventory/deliver`, {
      serial_number: serialNumber,
    });
  }
}
