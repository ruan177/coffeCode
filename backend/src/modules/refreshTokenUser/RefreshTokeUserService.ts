import {prisma} from '../../lib/prisma'
import dayjs from 'dayjs';
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";

export class RefreshTokenUserService {
    async execute(refresh_Token: string){
        const refreshToken = await prisma.refreshToken.findFirst({
            where: {
                id: refresh_Token,
            } 
        })
        if(!refreshToken){
            throw new Error("Refresh Token Invalid ")
        }
        console.log(refreshToken)
        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(Number(refreshToken.expiresIn)))

        if(refreshTokenExpired){
            throw new Error("Refresh Token Expired")
        }
        console.log(refreshTokenExpired)
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(refreshToken.user_id);

        console.log(token)
        return token
        
    }
}