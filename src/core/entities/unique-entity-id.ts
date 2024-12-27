import { randomUUID } from 'crypto';

export class UniqueEntityId {
  private _id: string;
  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  toValue() {
    return this._id;
  }

  toString() {
    return this._id;
  }
}
