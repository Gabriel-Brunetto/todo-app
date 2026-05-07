import { Controller, Get, Post, Body, Delete, Patch, Param} from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller('/tasks')
export class TasksController{

    constructor(private service: TaskService){}

    @Get()
    async listTasks(){
        return this.service.listTasks()
    }

    @Post()
    async createTask(@Body() body: {title: string}){
        const task = await this.service.create(body.title)
        return task
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){
        await this.service.deleteTask(id)
        return {message: 'Tarefa Deletada Com Sucesso'}
    }

    @Patch(':id/done')
    async changeTaks(@Param('id') id:string){
        const taskUpdated = await this.service.changeTask(id)
        return taskUpdated
    }
}