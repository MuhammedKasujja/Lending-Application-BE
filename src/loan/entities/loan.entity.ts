import { LoanPurpose } from '../../loan_purpose/entities/loan_purpose.entity';
import { Client } from '../../client/entities/client.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  RelationId,
  OneToOne,
} from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client.loans)
  client!: Client;

  @RelationId((loan: Loan) => loan.client)
  clientId: number;

  @OneToOne(()=>LoanPurpose)// (loanPurpose) => loanPurpose.loans)
  loanPurpose:LoanPurpose

  // @RelationId((loanPurpose: LoanPurpose) => loanPurpose.client)
  // loanPurposeId: number;

  @Column()
  amount: number;

  @Column()
  status: number;

  @CreateDateColumn()
  datetaken: Date;

  @UpdateDateColumn()
  updatedAt: Date; // Last updated date
}
