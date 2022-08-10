import { User } from "src/app/model/user.model";
import { Category } from "./category.model";

export class Tasks {
  id: number;
  nameTask: String;
  dateTask : Date;
  description : String;
  checked : boolean;
  // deleted: boolean;
  category : Category;
  user : User;

  constructor(id: number,
    nameTask: String,
    dateTask : Date,
    description : String,
    checked : boolean,
    // deleted: boolean,
    category : Category,
    user : User
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
