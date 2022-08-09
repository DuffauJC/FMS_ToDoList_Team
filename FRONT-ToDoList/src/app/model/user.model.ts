export class User {
    id: number
    active: boolean
    mail: string


    constructor(id: number, active: boolean, mail: string) {

        this.id = id
        this.active = active
        this.mail = mail
    }

}