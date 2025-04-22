import { Controller, Get, Post, Param, Body, ParseIntPipe, Query, ParseBoolPipe } from '@nestjs/common'
import { createUserDto } from './dto/createUser.dto'

@Controller('user')
export class UserController {
    @Get()
    findAll() {
        return 'All Users'
    }

    //validation queryparams
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
        console.log(typeof id)
        console.log(typeof sort)

        return id
    }

    // @Get(':id/:slug')
    // findOne(@Param('id') id, @Param('slug') slug) {
    //     return `id =${id} slug=${slug}`
    // }

    //createUserDto - body validation
    @Post()
    create(@Body() body: createUserDto) {
        return name
    }
}
