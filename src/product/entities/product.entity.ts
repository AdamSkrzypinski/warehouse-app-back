import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { PlaceEntity } from '../../location/entities/place.entity';
import { AreaEntity } from '../../location/entities/area.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 70,
  })
  name: string;

  @Column({
    type: 'float',
    precision: 10,
    scale: 4,
  })
  count: number;

  @Column({ length: 15 })
  measure: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ManyToOne((type) => AreaEntity, (entity) => entity.products)
  @JoinColumn()
  productArea: AreaEntity;

  @ManyToOne((type) => PlaceEntity, (entity) => entity.products)
  @JoinColumn()
  productPlace: PlaceEntity;
}
