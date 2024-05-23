import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('deduct')
    async deductBalance(@Body() body: { userId: number; amount: number }) {
        await this.userService.deductBalance(body.userId, body.amount);
        return { success: true };
    }
}
