import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as NodeCache from 'node-cache';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SkinportService {
    private cache: NodeCache;

    constructor(private httpService: HttpService) {
        this.cache = new NodeCache({ stdTTL: 3600 }); // cache for 1 hour
    }

    async getItems(): Promise<any> {
        const cacheKey = 'skinport_items';
        const cachedItems = this.cache.get(cacheKey);
        if (cachedItems) {
            return cachedItems;
        }

        const response = await firstValueFrom(this.httpService.get('https://api.skinport.com/v1/items'));
        const items = response.data;

        this.cache.set(cacheKey, items);
        
        return items;
    }
}
