import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.css']
})
export class BaseDialogComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() text: string;

  constructor(public readonly dialogRef: MatDialogRef<BaseDialogComponent>) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.dialogRef.close('ok');
  }

  clear(): void {
    this.dialogRef.close();
  }
}
