import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class PagamentoEntity {
  @PrimaryGeneratedColumn('uuid')
  id_pagamento: number;
  @Column({ nullable: false })
  data: Date;
}
