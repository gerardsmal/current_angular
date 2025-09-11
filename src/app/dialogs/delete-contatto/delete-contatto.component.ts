import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-contatto',
  standalone: false,
  templateUrl: './delete-contatto.component.html',
  styleUrl: './delete-contatto.component.css'
})
export class DeleteContattoComponent {
  persona: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteContattoComponent>) {
    if (data) {
      this.persona = data.persona;
    }
  }

  optionSelected(opt:string){
    this.dialogRef.close(opt);
  }
}
