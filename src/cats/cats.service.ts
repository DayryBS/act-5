import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = [{ id: 1, name: 'Michi', age: 2 }];

  findAll() {
    return this.cats;
  }

  create(cat: { name: string; age: number }) {
    const newCat = { id: Date.now(), ...cat };
    this.cats.push(newCat);
    return newCat;
  }
}
