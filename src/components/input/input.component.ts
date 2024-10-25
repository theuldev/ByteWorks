import { CommonModule, NgIf } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
type InputTypes = "text" | "email" | "tel" | "textarea"
@Component({
  selector: 'bw-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [provideNgxMask(), {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type: InputTypes = "text"
  @Input() placeholder: string = ""
  @Input() label: string = ""
  @Input() inputName: string = ""
  @Input() inputMaxLength?: number;
  value: string = ''
  onChange: any = () => { }
  onTouched: any = (value: any) => {
  }
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
    this.onTouched();
  }
  writeValue(value: any): void {
    this.value = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {
  }

  PlaceMask(type: InputTypes): string {
    switch (type) {
      case "tel":
        return '(00) 00000-0000';
      default:
        return '';
    }
  }

}
