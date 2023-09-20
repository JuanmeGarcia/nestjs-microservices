import * as Joi from "joi";


export const config = Joi.object({
    MONGODB_URI: Joi.string().required()
})