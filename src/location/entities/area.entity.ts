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

  @Column()
  name: string;

  @OneToMany((type) => Product, (entity) => entity.productArea)
  products: Product[];

  @OneToMany((type) => PlaceEntity, (entity) => entity.placeArea)
  places: PlaceEntity[];
}
