import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";
import {RatingsFormModel, TypeFormModel} from "../../models/input-specification/transformer.type.form.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class InputSpecificationService {

  typeForm: BehaviorSubject<FormGroup> = new BehaviorSubject(
    this.formBuilder.group(new TypeFormModel())
  );
  $typeForm: Observable<FormGroup> = this.typeForm.asObservable();

  ratingsForm: BehaviorSubject<FormGroup> = new BehaviorSubject(
    this.formBuilder.group(new RatingsFormModel())
  );
  $ratingsForm: Observable<FormGroup> = this.ratingsForm.asObservable();



  constructor(private formBuilder:FormBuilder) { }
  resetAllForms(){
    this.resetTypeForm();
    this.resetRatingsForm();
  }

   resetTypeForm(){
    this.typeForm.next(this.formBuilder.group(new TypeFormModel()));
   }

   resetRatingsForm(){
    this.ratingsForm.next(this.formBuilder.group(new RatingsFormModel()));
   }

}
