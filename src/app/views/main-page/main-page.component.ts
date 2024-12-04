import { Component, OnDestroy } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputFileComponent } from '../../components/input-file/input-file.component';
import { ImageContainerComponent } from '../../components/image-container/image-container.component';
import { CommonModule } from '@angular/common';
import { DetectionService } from '../../services/detection/detection.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ButtonComponent, InputFileComponent, ImageContainerComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnDestroy {

  constructor(private service: DetectionService) {}

  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;
  resultImageUrl: string | null = null;

  receiveFile(file: File | null) {
    if (this.selectedFileUrl) {
      URL.revokeObjectURL(this.selectedFileUrl);
    }
    this.selectedFile = file;
    this.selectedFileUrl = file ? URL.createObjectURL(file) : null;
  }

  handleClickMain() {
    if (!this.selectedFile) {
      alert("Nenhum arquivo encontrado");
      return;
    }

    this.service.uploadImage(this.selectedFile).subscribe({
      next: () => this.getProcessedImage(), 
      error: (err) => alert(`Não foi possível enviar imagem. Erro: ${err}`)
    });
  }

  getProcessedImage() {
    this.service.getProcessedImage().subscribe({
      next: (blob) => {
        if (this.resultImageUrl) {
          URL.revokeObjectURL(this.resultImageUrl);
        }
        this.resultImageUrl = URL.createObjectURL(blob);
      },
      error: (err) => alert(`Não foi possível receber imagem processada. Erro: ${err}`)
    });
  }

  ngOnDestroy() {
    if (this.selectedFileUrl) {
      URL.revokeObjectURL(this.selectedFileUrl);
    }
    if (this.resultImageUrl) {
      URL.revokeObjectURL(this.resultImageUrl);
    }
  }
}