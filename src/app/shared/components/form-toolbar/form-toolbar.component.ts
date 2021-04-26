import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-toolbar',
  templateUrl: './form-toolbar.component.html',
  styleUrls: ['./form-toolbar.component.scss'],
})
export class FormToolbarComponent {
  @Input() title: string;
  @Input() saveEnabled: boolean;
  @Output() cancelClicked = new EventEmitter();
  @Output() saveClicked = new EventEmitter();

  onCancel(): void {
    this.cancelClicked.emit();
  }

  onSave(): void {
    this.saveClicked.emit();
  }
}
