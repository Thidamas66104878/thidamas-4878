import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly service: CategoriesService) { }

    @Post()
    create(@Body() body: CategoryDto) {
        return this.service.create(body);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get('user/:userId')
    findByUser(@Param('userId') userId: string) {
        return this.service.findByUser(+userId);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: Partial<CategoryDto>) {
        return this.service.update(+id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}




