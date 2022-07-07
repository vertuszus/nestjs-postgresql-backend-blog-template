import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {UserCreationAttrs} from "../shared/models/user-creation-attrs.model";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../user-roles/user-roles.model";
import {Post} from "../posts/posts.model";

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'test@gmail.com', description: 'Почтовый адрес'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: 'testpass01', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true', description: 'Флаг наличия блокировки'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'Спам', description: 'Причина блокировки'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  // для связывания двух таблиц
  @BelongsToMany( () => Role, () => UserRoles )
  roles: Array<Role>;

  @HasMany(() => Post)
  posts: Array<Post>;

}
