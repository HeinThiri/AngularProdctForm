import { Injectable } from '@angular/core';
const STORAGE="product"
const GENERATOR ="product_id_generator"
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private list:Array <any>
  private generator:any
 

  constructor() { 
    this.generator= JSON.parse(localStorage.getItem(GENERATOR)!)  
    if(!this.generator){
      this.generator={
        id :0
      }
    }
   this.list =  JSON.parse(localStorage.getItem(STORAGE)!)  
   if(!this.list){
    this.list=[]
   }

  }
  findByID(id:null){
    let filtered = this.list.filter(a=>a.id == id)
      if(filtered.length > 0){
        return filtered[0]
      }
    }
  
  getAll(){
   
    return this.list;
  }
  delete(data:any){
    this.list = this.list.filter(s=>s!== data)
    localStorage.setItem(STORAGE,JSON.stringify(this.list))
    return this.list
}
add(s:any){
  if(s.id){
    let target = -1
    for(let index = 0; index <this.list.length;index++){
      const element = this.list[index];
      if(element.id == s.id){
        target=index
      }
    }
    if(target >= 0){
      this.list[target]=s
    }

  }else{
  s.id = ++ this.generator.id;
 this.list.push(s);
  }
 localStorage.setItem(STORAGE,JSON.stringify(this.list))
 localStorage.setItem(GENERATOR,JSON.stringify(this.generator))
}


}

