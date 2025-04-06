import { FastifyReply, FastifyRequest } from "fastify";

export interface FastifyContextDTO{
    req: FastifyRequest,
    res: FastifyReply
}