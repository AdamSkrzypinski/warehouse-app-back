import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  userLogin: string;

  @Column({ length: 100 })
  action: string;
}
