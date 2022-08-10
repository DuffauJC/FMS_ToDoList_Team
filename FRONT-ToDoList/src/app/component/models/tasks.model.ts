import { Category } from "./category.model";

export class Tasks {
  id: number;
  nameTask: String;
  dateTask : Date;
  description : String;
  checked : boolean;
  deleted: boolean;
  category : Category;
  //users : Users;

  constructor(id: number,
    nameTask: String,
    dateTask : Date,
    description : String,
    checked : boolean,
    deleted: boolean,
    category : Category,
    //users : String
    ) {
    this.id = id;
    this.nameTask = nameTask;
    this.dateTask = dateTask;
    this.description = description;
    this.checked = checked;
    this.deleted = deleted;
    this.category = category;
    //this.users = users;
  }

}
