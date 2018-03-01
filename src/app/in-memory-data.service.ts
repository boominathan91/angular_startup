import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const products = [
      { id: 1, name: 'Soap' },
      { id: 2, name: 'Powder' },
      { id: 3, name: 'Baby Soap' },
      { id: 4, name: 'Comb' },
      { id: 5, name: 'Chocolates' },
      { id: 6, name: 'Biscuits' },
      { id: 7, name: 'Honey' },
      { id: 8, name: 'Dates' },
      { id: 9, name: 'Oil' },
      { id: 10, name: 'Scrubber' }
    ];

    return {products};
  }
}