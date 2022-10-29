import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.model';

interface PostCreationAttributes {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttributes> {

  @ApiProperty({ example: '1', description: 'Id, unique identifier'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'New processor', description: 'Post title'})
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: 'The inside of the post', description: 'The inside of the post'})
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: 'Image', description: 'Should be jpeg/jpg/gif/png format'})
  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @ApiProperty({ example: 11, description: 'Foreign key'})
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User
}