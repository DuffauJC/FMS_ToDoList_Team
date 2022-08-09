import { Category } from './category.model';
import { Role } from './role.model';

export class Users {
  id: number;
  mail: String;
  task: Task[];
  category: Category[];
  active: boolean;
  role: Role[];

  constructor(
    id: number,
    mail: string,
    task: Task[],
    category: Category[],
    active: boolean,
    role: Role[]
  ) {
    this.id = id;
    this.mail = mail;
    this.task = task;
    this.category = category;
    this.active = active;
    this.role = role;
  }
}
