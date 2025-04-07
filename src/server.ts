import fastify from "fastify";
import { createUser } from "./infra/routes/userRoutes";

const server = fastify()

server.register(createUser)

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen({port: 3000 }, (err, address) => {
    if (err) {
        console.error("Error starting server:", err)
        process.exit(1)
    }
    console.log("Server http running!", address)
})

