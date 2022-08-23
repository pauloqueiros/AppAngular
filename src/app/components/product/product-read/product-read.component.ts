import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { MatDialog, matDialogAnimations, MatDialogRef } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component'
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'actions']
  clickEventsubscription: Subscription;

  constructor(private productService: ProductService, private dialog: MatDialog) { 
    this.clickEventsubscription = this.productService.getUpdate().subscribe(()=>{
      this.ngOnInit();
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: number, name: string): void {
    this.dialog.open(ModalDeleteComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {id,name}
    });
  }

  ngOnInit(): void {
    this.productService.read().subscribe(data => {
      this.products = data
    })
  }

}
