import { Injectable } from "@nestjs/common";
import { InjectRepository, } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./tasks.entity";


@Injectable()
export class TaskService{
   constructor(@InjectRepository(Task) private repo: Repository<Task> ){}

   async listTasks(){
        return this.repo.find() 
   }

   async create(title: string){
        const task = this.repo.create({title})
        return this.repo.save(task)
   }

   async deleteTask(id){
        return this.repo.delete(id)
   }

   async changeTask(id){
        await this.repo.update(id, {done: true})
        return this.repo.findOne({where: {id}})
   }
}