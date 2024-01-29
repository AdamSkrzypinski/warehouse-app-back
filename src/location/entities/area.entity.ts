import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { PlaceEntity } from './place.entity';

@Entity()
export class AreaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Product, (entity) => entity.productArea)
  products: Product[];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => PlaceEntity, (entity) => entity.placeArea)
  places: PlaceEntity[];
}
