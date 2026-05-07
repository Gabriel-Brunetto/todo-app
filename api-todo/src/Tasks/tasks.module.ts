import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { Task } from "./tasks.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from "./tasks.service";

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TasksController],
    providers: [TaskService]
})

export class TasksModule{}