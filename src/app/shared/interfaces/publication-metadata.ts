import { InputType } from '@shared/enums/input-type.enum';

export interface PublicationMetadata {
  id: number;
  name: string;
  type: string | InputType;
  fieldId: number;
  fieldCode: string;
  placeholderTxt: string;
  isReadOnly: boolean;
  isHidden: boolean;
  priority: number;
  isMandatory: boolean;
}
