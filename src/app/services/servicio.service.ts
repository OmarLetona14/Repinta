import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  countries:any = new Array();
  private productsCollection:AngularFirestoreCollection<Service>;

  constructor(private readonly afs:AngularFirestore) {
    this.productsCollection =  this.afs.collection<Service>('services');
  }

  public getServices():Promise<any>{
    return this.productsCollection.get().toPromise();
  }
}
