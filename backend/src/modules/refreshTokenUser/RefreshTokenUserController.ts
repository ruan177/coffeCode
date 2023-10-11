import { Request, Response} from 'express'
import { RefreshTokenUserService } from './RefreshTokeUserService';
import { z } from 'zod';

export class RefreshTokenUserController{
    async handle(req: Request, res: Response){
        const typeRefresh = z.string();
        const refresh = typeRefresh.parse(req.body.refresh);
        console.log("trocando o token de acesso");

        const refreshTokenUserService = new RefreshTokenUserService()

        try{
            const access = await refreshTokenUserService.execute(refresh)

            return res.json({access}) 
        }catch(error: any){
            return res.status(401).json(error.message)
        }

        

    }
}