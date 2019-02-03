import { Component, OnInit } from '@angular/core';
import {BUTTONS} from "../../../../../constants/Buttons";
import {LABELS, TAB_INDEX_MODAL_HEADER_MAP} from "../../../../../constants/Labels";
import {FormGroup} from "@angular/forms";
import {InputSpecificationService} from "../../services/input-specification/input-specification.service";
import {Subscription} from "rxjs/index";
import {TRANSFORMER} from "../../../../../constants/Transformer";

@Component({
  selector: 'app-input-specification',
  templateUrl: './input-specification.component.html',
  styleUrls: ['./input-specification.component.scss']
})
export class InputSpecificationComponent implements OnInit {
  //Constants
  buttons = BUTTONS;
  labels = LABELS;
  transformerType = TRANSFORMER.TYPE;
  //Constants

  tabIndex;
  modalHeader;

  typeForm: FormGroup;
  typeFormSubscription:Subscription;

  ratingsForm: FormGroup;
  ratingsFormSubscription:Subscription;

  constructor(
    private inputSpecificationService: InputSpecificationService,
  ) {}

  ngOnInit() {
    this.tabIndex = 1;
    this.modalHeader = TAB_INDEX_MODAL_HEADER_MAP[this.tabIndex];
    this.typeFormSubscription = this.inputSpecificationService.$typeForm.subscribe(
        (typeForm) => {
          this.typeForm = typeForm
        }
      );
    this.ratingsFormSubscription = this.inputSpecificationService.$ratingsForm.subscribe(
      (ratingsForm) => {
          this.ratingsForm = ratingsForm;
      }
    );
  }

  onNext(){
    this.tabIndex++;
    this.modalHeader = TAB_INDEX_MODAL_HEADER_MAP[this.tabIndex];
    console.log(this.typeForm);
  }

  onBack(){
    this.tabIndex--;
    this.modalHeader = TAB_INDEX_MODAL_HEADER_MAP[this.tabIndex];
  }

  onStartDesign(){

  }

  onAddNewDesign() {
    this.tabIndex = 1;
    this.modalHeader = TAB_INDEX_MODAL_HEADER_MAP[this.tabIndex];
    this.inputSpecificationService.resetAllForms();
  }

  ratingsFormChange() {
    console.log(this.ratingsForm);
  }


}
