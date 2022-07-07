import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {RoleCreationAttrs} from "../shared/models/role-creation-attrs.model";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "../user-roles/user-roles.model";

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное значение роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    // для связывания двух таблиц
    @BelongsToMany( () => User, () => UserRoles )
    users: Array<User>;

}
