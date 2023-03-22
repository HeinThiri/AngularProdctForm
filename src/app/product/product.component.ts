import { Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import{ Router,ActivatedRoute}from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() show!: boolean;
  ProductForm:FormGroup
  tmpID: any;
  constructor( private service: ProductlistService,
    builder:FormBuilder,
    private router : Router,
    private route :ActivatedRoute
  
  ){
    this.ProductForm=builder.group({
      id :null,
      pname:['',Validators.required],
       qty: new FormControl(1),
       price:['', Validators.required],
       quantityAdjustment: new FormControl(1),
      });
  
    
    this.tmpID = this.route.snapshot.paramMap.get('id');
		// customize default values of modals used by this component tree
    if(this.tmpID){
      this.ProductForm.patchValue(service.findByID(this.tmpID))
      // this.quantity = this.ProductForm.value.qty;
    }

	
	}
  ngOnInit() {
    
   
  }
  modalOpen = false;
  add(): void{
    this.service.add(this.ProductForm.value)
     this.modalOpen = false;
    //this.closeModal.emit();
    this.router.navigateByUrl('/list')
    
  }
  // close(){
  //   this.router.navigateByUrl('')
  // }
  get pname(){
    return this.ProductForm.get('name');
  }get qty(){
    return this.ProductForm.get('qty');
  }
  get price(){
    return this.ProductForm.get('price');
  
  }
 
  close(): void {
    this.closeModal.emit();
    this.router.navigateByUrl('')
  }
//   increment(){
//     this.quantity++;
//   }
 
increment() {
  this.ProductForm.patchValue({
    qty: this.ProductForm.value.qty + 1,
    quantityAdjustment: this.ProductForm.value.quantityAdjustment + 1,
  });
}

decrement() {
  const currentQty = this.ProductForm.value.qty;
  if (currentQty > 1) {
    this.ProductForm.patchValue({
      qty: currentQty - 1,
      quantityAdjustment: this.ProductForm.value.quantityAdjustment - 1,
    });
  }

}
}
