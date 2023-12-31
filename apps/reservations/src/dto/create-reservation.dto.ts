import { Type } from 'class-transformer'
import { IsDate, IsString, IsNotEmpty } from 'class-validator'

export class CreateReservationDto {
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    startDate: Date
    
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    endDate: Date

    @IsNotEmpty()
    @IsString()
    placeId: string

    @IsNotEmpty()
    @IsString()
    invoiceId: string
}
