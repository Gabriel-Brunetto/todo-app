import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { Task } from "./tasks.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TasksController],
    providers: []
})

export class TasksModule{}