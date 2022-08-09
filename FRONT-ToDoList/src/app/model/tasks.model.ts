import { Category } from "./category.model";

export class Tasks {
    id : number;
    nameTask: string;
    dateTask: Date;
    description: string;
    checked: boolean;
    deleted: boolean;
    category: Category;
    //users: Users;

    constructor(id : number, nameTask: string, dateTask: Date, description: string,  checked: boolean, deleted: boolean, category: Category){
        this.id = id;
        this.nameTask = nameTask;
        this.dateTask = dateTask;
        this.description = description;
        this.checked = checked;
        this.deleted = deleted;
        this.category = category;
    }
}