import { Injectable } from '@nestjs/common';
import { RestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant, RestaurantDocument } from '../schemas/restaurant.schema'
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PagedData } from './dto/paged-data.dto';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>) { }
  create(restaurantDto: RestaurantDto): Promise<Restaurant & Document<any, any, any>> {
    const createdRestaurant = new this.restaurantModel(restaurantDto);
    return createdRestaurant.save().then(createdResponse => {
      return createdResponse._id;
    });
  }

  findAll(): Promise<PagedData> {
    return this.restaurantModel.find().exec().then((x: Restaurant[])=>{
      const restaurantDtos = x.map(e=>{
        const restaurantDto: RestaurantDto = {
          address: e.address,
          googleUrl: e.googleUrl,
          iconBackgroundColor: e.iconBackgroundColor,
          iconMaskUrl: e.iconMaskUrl,
          iconUrl: e.iconUrl,
          international_phone: e.international_phone,
          isActive: e.isActive,
          latitude: e.latitude,
          longitude: e.longitude,
          phone: e.phone,
          photos: e.photos,
          placeId: e.placeId,
          priceLevel: e.priceLevel,
          rating: e.rating,
          restaurantId: e.restaurantId,
          restaurantName: e.restaurantName,
          reviews: e.reviews,
          timings: e.timings,
          types: e.types,
          userRatingsCount: e.userRatingsCount,
          utcOffset: e.utcOffset,
          website: e.website
        }
        return restaurantDto;
      });
      const pagedData: PagedData = {
        restaurants: restaurantDtos,
        totalRows: restaurantDtos.length
      }
      return pagedData
    });
  }

  // findAll(): Promise<RestaurantDto[]> {
  //   return this.restaurantModel.find().exec();
  // }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
