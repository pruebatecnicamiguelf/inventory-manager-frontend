import { Component } from '@angular/core';
import { InventoryService } from 'src/app/services/services/inventory.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  inventoryData = {
    username: '',
    product_id: '',
    product_name: '',
    serial_number: '',
    date: '',
  };

  products: any[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.inventoryService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onSubmit(): void {
    const selectedProduct = this.products.find(product => product.id === parseInt(this.inventoryData.product_id));
    if (selectedProduct) {
      this.inventoryData.product_name = selectedProduct.name;
    }
    this.inventoryService
      .addInventory(this.inventoryData)
      .subscribe((response) => {
        alert('Producto registrado');
      });
  }
}
