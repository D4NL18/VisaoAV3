import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-input-file',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss'
})
export class InputFileComponent {
  selectedFile: File | null = null;

  @Output() fileSelected = new EventEmitter<File | null>();

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    this.fileSelected.emit(this.selectedFile)
  }
}
