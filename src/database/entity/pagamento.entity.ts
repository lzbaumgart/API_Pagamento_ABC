import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class PagamentoEntity {
  @PrimaryGeneratedColumn('uuid')
  id_pagamento: string;
  @Column({ nullable: false, default: () => "DATE('now')" })
  data: Date;
  @Column()
  valor: number;
  @Column()
  numeroCartao: string;
  @Column()
  parcelas: number;
  @Column()
  nomeCartao: string;
  @Column({ default: 0 })
  statusPgto: number;
  @Column({ default: null })
  statusPgtoDesc: string;
}
