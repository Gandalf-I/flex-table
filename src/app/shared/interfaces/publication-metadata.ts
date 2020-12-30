export interface PublicationMetadata {
  id: number;
  name: string;
  type: string;
  fieldId: number;
  fieldCode: string;
  placeholderTxt: string;
  isReadOnly: boolean;
  isHidden: boolean;
  priority: number;
  isMandatory: boolean;
}
