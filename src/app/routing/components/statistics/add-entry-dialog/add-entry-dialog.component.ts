import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-entry-dialog',
  templateUrl: './add-entry-dialog.component.html',
  styleUrls: ['./add-entry-dialog.component.scss']
})
export class AddEntryDialogComponent implements OnInit {

  addEntryForm: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddEntryDialogComponent>) { }

  ngOnInit() {
    this.addEntryForm = this.fb.group({
      'date':['', [Validators.required]],
      'kwh': ['', [Validators.required]],
      'total': ['', [Validators.required]]
    });
  }

  get date() {
    return this.addEntryForm.get('date');
  }

  get kwh() {
    return this.addEntryForm.get('kwh');
  }

  get total() {
    return this.addEntryForm.get('total');
  }

  onSubmit() {
    this.dialogRef.close(this.addEntryForm.value);
  }

}
