import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputFileComponent } from '../../components/input-file/input-file.component';
import { ImageContainerComponent } from '../../components/image-container/image-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ButtonComponent, InputFileComponent, ImageContainerComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  handleClick() {
    console.log("Button Click")
  }
}
