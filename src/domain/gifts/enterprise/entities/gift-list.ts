import { Entity } from '@/core/entities/entity';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';

export interface GiftListProps {
  ownerId: UniqueEntityId;
  name: string;
}

export class GiftList extends Entity<GiftListProps> {
  static create(props: GiftListProps, id?: UniqueEntityId) {
    return new GiftList(props, id);
  }

  get ownerId() {
    return this.props.ownerId;
  }

  get name() {
    return this.props.name;
  }
}
