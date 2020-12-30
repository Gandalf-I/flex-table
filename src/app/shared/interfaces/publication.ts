import { Field } from '@shared/interfaces/field';

export interface Publication {
  id: number;
  code: string;
  data: Field[];
}
