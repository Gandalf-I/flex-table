import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '../../enums/input-type.enum';

@Component({
  selector: 'app-flex-inputs',
  templateUrl: './flex-inputs.component.html',
  styleUrls: ['./flex-inputs.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FlexInputsComponent),
    multi: true,
  }],
})
export class FlexInputsComponent implements ControlValueAccessor {

  readonly InputType = InputType;

  private _value: any = '';

  get value() {
    return this._value;
  }

  @Input()
  set value(value: any) {
    this._value = value;

    this.onChange(this._value);
  }

  @Input()
  type: string | InputType = InputType.String;

  disabled: boolean = false;

  constructor() { }

  onTouched() {}
  onChange(_: any) {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
