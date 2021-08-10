import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
  { "id": 1, "brand": "bloan", "url": "assets/Images/business loan.PNG" },    
  { "id": 2, "brand": "cc", "url": "assets/Images/credit card.PNG" },    
  { "id": 3, "brand": "deposit", "url": "assets/Images/fixed deposit.PNG" },    
  { "id": 4, "brand": "insurance", "url": "assets/Images/insurance.PNG" },    
  { "id": 5, "brand": "ploan", "url": "assets/Images/loan.PNG" },    
]