import { FastifyInstance } from "fastify";
import { userInstance } from "../../shared/instances/userInstance";

export function createUser(fastify: FastifyInstance){
    fastify.post('/create', (req, res) => userInstance.create({req, res}))
}