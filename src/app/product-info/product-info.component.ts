import { Component,Output } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
  providers: [ReversePipe]
})
export class ProductInfoComponent {
  searchTerm: string='';
  data : Array<number> = [1,2,3,4,5];
  sum  : Array<number> = [0];
  

  
  list =[
    {
    id : null,
    pname:'',
    qty:0,
    price: 0,

  }
 
    
  ];
  constructor(private service:ProductlistService){
    this.list = service.getAll();
}
delete(s:any){
 this.list = this.service.delete(s);
  }
getTotal() {

    var total = 0;
    for(var i = 0; i < this.list.length; i++){
        var GrandTotal = this.list[i].price * this.list[i].qty;
        total += GrandTotal;
    }
    return total.toLocaleString();
}

}


