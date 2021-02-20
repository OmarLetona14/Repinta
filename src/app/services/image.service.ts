import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imagesCollection:AngularFirestoreCollection<Image>;

  constructor(private readonly afs: AngularFirestore) {
    this.imagesCollection = afs.collection<Image>('images');
    this.getImages();
   }

   public getImages():Promise<any>{
    return this.imagesCollection.get().toPromise();
   }
}
