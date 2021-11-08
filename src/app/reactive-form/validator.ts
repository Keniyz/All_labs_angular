import {AbstractControl, Validators} from "@angular/forms";

export const minLen = (control: AbstractControl)=>{
  const  controlValue=control.value;
  if(controlValue.length>=3){
    return null
  }
  return{
    minLength:true
  }
}
