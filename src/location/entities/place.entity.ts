import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { AreaEntity } from './area.entity';

@Entity()
export class PlaceEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany((type) => Product, (entity) => entity.productPlace)
  products: Product[];

  @ManyToOne((type) => AreaEntity, (entity) => entity.places)
  @JoinColumn()
  placeArea: AreaEntity;
}
