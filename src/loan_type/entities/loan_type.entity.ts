import { User } from '../../user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class LoanType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  minAmount: number;

  @Column({})
  maxAmount: number;

  @Column({})
  repaymentDays: number;

  @OneToOne((_) => User)
  @JoinColumn()
  createdBy: User;

  @OneToOne((_) => User)
  @JoinColumn()
  lastUpdatedBy: User;

  @CreateDateColumn()
  createdAt: Date; // Creation date

  @UpdateDateColumn()
  updatedAt: Date; // Last updated date
}
