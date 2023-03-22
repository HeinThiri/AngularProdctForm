import { Component,Input } from '@angular/core';
import { ProductlistService } from './productlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() show!: boolean;
  modalOpen = false;

  openModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    alert('close modal')
    this.modalOpen = false;
  }
  
  
}