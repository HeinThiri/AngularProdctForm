import { Component,Input } from '@angular/core';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() show!: boolean;

}
