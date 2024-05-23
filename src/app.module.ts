import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users/users.service';
import { SkinportService } from './skinport/skinport.service';
import { UserController } from './users/users.controller';
import { SkinportController } from './skinport/skinport.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, UserController, SkinportController],
  providers: [AppService, UserService, SkinportService],
})
export class AppModule {}
