import {FormControl, Validators} from "@angular/forms";

export class TypeFormModel{
  type = new FormControl('',Validators.required);
}

export class RatingsFormModel{
  KVARating = new FormControl('',Validators.required);
  vectorGroup = new FormControl('',Validators.required);
  LVNominalLineVoltage = new FormControl('',Validators.required);
  HVNominalLineVoltage = new FormControl('',Validators.required);
  insulaionClass = new FormControl('',Validators.required);
  frequency = new FormControl('',Validators.required);
  inputVoltageVariation = new FormControl('',Validators.required);
  inputFrequencyVariation = new FormControl('',Validators.required);
  conductor= new FormControl('',Validators.required);
}
