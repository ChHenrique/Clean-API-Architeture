export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public photoUrl: string,
        public readonly id?: string,
    ){}
}