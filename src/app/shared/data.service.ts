import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {IRequest} from "../models/IRequest";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs :AngularFirestore) {}
  //add Request
  addRequest(request:IRequest){
    request.id = this.afs.createId();
    return this.afs.collection('/Requests').add(request);
  }
  getAllRequests(){
    return this.afs.collection('/Requests').snapshotChanges();
  }
  //delete Request
  deleteRequest(request :IRequest){
    return this.afs.doc('/Requests/' + request.id).delete()
  }

  //update Request
  updateRequest(request :IRequest){
     this.deleteRequest(request)
     this.addRequest(request)
  }
}
