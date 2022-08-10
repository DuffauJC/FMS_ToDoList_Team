import { Category } from "./category.model";
import { Users } from "./users.model";

export class Tasks {
  id: number;
  nameTask: String;
  dateTask : Date;
  description : String;
  checked : boolean;
  // deleted: boolean;
  category : Category;
  user : Users;

  constructor(id: number,
    nameTask: String,
    dateTask : Date,
    description : String,
    checked : boolean,
    // deleted: boolean,
    category : Category,
    user : Users
    ) {
    this.id = id;
    this.nameTask = nameTask;
    this.dateTask = dateTask;
    this.description = description;
    this.checked = checked;
    // this.deleted = deleted;
    this.category = category;
    this.user = user;
  }

}
