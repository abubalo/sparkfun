
import { config } from "@/config/config"
import  {Request, Response} from "express"

const stripeConfigKey = async (req: Request, res: Response)=>{
    try {
        console.log(config.stripe.publishKey)
        res.status(200).send({publish_key: config.stripe.publishKey})
    } catch (error) {
        res.status(500).json("Error: Unbale to find publish key")
    }
}

export default stripeConfigKey