import { randomUUID } from 'crypto';

export class UniqueEntityId {
  private _id: string;
  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  get toValue() {
    return this._id;
  }

  get toString() {
    return this._id;
  }
}
