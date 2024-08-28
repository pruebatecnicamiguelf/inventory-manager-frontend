import { Component } from '@angular/core';
import { InventoryService } from 'src/app/services/services/inventory.service';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.scss'],
})
export class DeliverComponent {
  inventory: any[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((data) => {
      console.log(data);
      this.inventory = data;
    });
  }

  onDeliver(serial_number: string): void {
    this.inventoryService.deliverProduct(serial_number).subscribe(
      (response) => {
        alert('Producto entregado');
        this.ngOnInit(); 
      },
      (error) => {
        alert('Este producto ya ha sido entregado');
      }
    );
  }
}
