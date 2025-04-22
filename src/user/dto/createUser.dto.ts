import { IsInt, IsString } from 'class-validator'

export class createUserDto {
    @IsString()
    name: string
    @IsInt()
    age: number
}
