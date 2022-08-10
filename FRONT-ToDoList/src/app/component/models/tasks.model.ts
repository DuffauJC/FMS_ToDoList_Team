import { Category } from "./category.model";

export class Tasks {
  id: number;
  nameTask: String;
  dateTask : Date;
  description : String;
  checked : boolean;
  category : Category;

  constructor(id: number,
    nameTask: String,
    dateTask : Date,
    description : String,
    checked : boolean,
    category : Category,
    ) {
    this.id = id;
    this.nameTask = nameTask;
    this.dateTask = dateTask;
    this.description = description;
    this.checked = checked;
    this.category = category;
  }

}
