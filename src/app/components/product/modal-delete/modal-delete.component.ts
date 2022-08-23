import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, matDialogAnimations, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  constructor(private router: Router,private productService: ProductService, public dialogRef: MatDialogRef<ModalDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string}) { }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.productService.delete(id).subscribe(() => {
      this.atualizaLista();
      this.productService.showMessage("Produto Excluido!!");
    })

  }

  atualizaLista(): void {
    this.productService.sendUpdate();
  }

}
