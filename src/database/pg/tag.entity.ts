import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Users } from './users.entity';
import { UserTags } from './user-tag.entity';

@Table({
  tableName: 'Tag',
  timestamps: false,
  modelName: 'Tag',
})
export class Tag extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.UUID,
  })
  creator: string;

  @Column({
    type: DataType.STRING(40),
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  sortOrder: string;

  @BelongsTo(() => Users)
  user: Users;

  @HasMany(() => UserTags)
  userTags: UserTags[];
}
