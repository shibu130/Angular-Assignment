import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { of, debounceTime, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { 

    






  }



  createProductArray(length:number){
    // debounce using rxjs 
    // delay for showing loading spinnner
    // wondering if the expectation was to use rxjs for debounce or 
    return of(Array.from({length:length}).map(this.createProductObject)).pipe(debounceTime(2000)).pipe(delay(2000))
  }

  createProductObject(){
    
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      shortName:faker.commerce.product(),
      productAjective:faker.commerce.productAdjective(),
      productMaterial:faker.commerce.productMaterial(),
      isbn:faker.commerce.isbn(10)
      
    }

  }
}
