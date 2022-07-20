import { request, Router } from "express";
import { createUserController } from "./CreateUser";

const router = Router()

router.post('/users', (request, response) => { 
    return createUserController.handle(request, response); 
});

export {router}