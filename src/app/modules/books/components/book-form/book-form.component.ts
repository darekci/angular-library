import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NUMBER_PATTERN,
  STRING_MIN_LENGTH,
} from 'src/app/shared/consts/validation-consts';

import { BookDto } from '../../models/book.dto';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  formGroup: FormGroup;
  title = 'Add New Book';
  @Output() formCancelled = new EventEmitter();
  @Output() formSubmitted = new EventEmitter<BookDto>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      author: [
        '',
        [Validators.required, Validators.minLength(STRING_MIN_LENGTH)],
      ],
      title: [
        '',
        [Validators.required, Validators.minLength(STRING_MIN_LENGTH)],
      ],
      isbn: ['', [Validators.maxLength(30)]],
      publishYear: ['', [Validators.pattern(NUMBER_PATTERN)]],
      publisher: ['', [Validators.maxLength(100)]],
    });
  }

  onCancel(): void {
    this.formCancelled.emit();
  }

  onSubmit(): void {
    this.formSubmitted.emit({
      ...this.formGroup.value,
      publishYear: this.formGroup.controls['publishYear'].value
        ? +this.formGroup.controls['publishYear'].value
        : null,
    });
  }
}
