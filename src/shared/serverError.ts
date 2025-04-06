export class ServerError extends Error {
    constructor(mensage: string, statusCode: number = 400,){ 
        super(mensage) 
    }
}