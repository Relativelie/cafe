import { FiltersENUM } from 'store/recipes/models/common';

export class FilterBlock {
  block: FiltersENUM;
  availableValues: Array<string>;

  constructor(block: FiltersENUM, availableValues: Array<string>) {
    this.block = block;
    this.availableValues = availableValues;
  }
}
