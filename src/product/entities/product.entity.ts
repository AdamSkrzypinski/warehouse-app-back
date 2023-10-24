import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
