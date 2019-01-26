import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";
import {TypeFormModel} from "../../models/input-specification/transformer.type.form.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class InputSpecificationService {

  tranformerTypeForm: BehaviorSubject<FormGroup> = new BehaviorSubject(
    this.formBuilder.group(new TypeFormModel())
  );

  $tranformerTypeForm: Observable<FormGroup> = this.tranformerTypeForm.asObservable();

  tranformerTypeForm: BehaviorSubject<FormGroup> = new BehaviorSubject(
    this.formBuilder.group(new TypeFormModel())
  );

  $tranformerTypeForm: Observable<FormGroup> = this.tranformerTypeForm.asObservable();


  constructor(private formBuilder:FormBuilder) { }

   resetTranformerTypeForm(){
    this.tranformerTypeForm.next(this.formBuilder.group(new TypeFormModel()));
   }

}
