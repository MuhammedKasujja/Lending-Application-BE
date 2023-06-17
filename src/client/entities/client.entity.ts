import { Loan } from '../../loan/entities/loan.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
  Index,
  RelationId,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uniqueId?: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Index({ unique: true })
  @Column()
  email: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  nationalId?: string;

  @OneToMany(() => Loan, (loan) => loan.client)
  loans?: Loan[];

  @RelationId((client: Client) => client.loans)
  loanIds: number[];

  @CreateDateColumn()
  createdAt: Date; // Creation date

  @UpdateDateColumn()
  updatedAt: Date; // Last updated date

  @BeforeInsert()
  appendUniqueId() {
    this.uniqueId = new Date().getSeconds().toString();
  }
}
