import { PartialType } from '@nestjs/mapped-types';
import { RestaurantDto } from './create-restaurant.dto';

export class UpdateRestaurantDto extends PartialType(RestaurantDto) {}
