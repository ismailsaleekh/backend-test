import { Controller, Get } from '@nestjs/common';
import { SkinportService } from './skinport.service';

@Controller('items')
export class SkinportController {
    constructor(private readonly skinportService: SkinportService) { }

    @Get()
    async getItems() {
        const items = await this.skinportService.getItems();
        return items;
    }
}
