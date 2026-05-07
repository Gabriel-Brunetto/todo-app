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
    async createTask(@Body() body: {title: string} ){
        await this.service.create(body.title)
        return {message: 'Tarefa Criada Com Sucesso'}
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){
        await this.service.deleteTask(id)
        return {message: 'Tarefa Deletada Com Sucesso'}
    }

    @Patch(':id/done')
    async changeTaks(@Param('id') id:string){
        await this.service.changeTask(id)
        return {message: 'Tarefa Concluida'}
    }
}