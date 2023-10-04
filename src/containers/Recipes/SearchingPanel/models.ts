import { FiltersENUM } from 'stores/recipes';

export class FilterBlock {
  label: string;
  block: FiltersENUM;
  availableValues: Array<string>;

  constructor(
    label: string,
    block: FiltersENUM,
    availableValues: Array<string>,
  ) {
    this.label = label;
    this.block = block;
    this.availableValues = availableValues;
  }
}
