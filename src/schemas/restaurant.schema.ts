import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
    @Prop()
    restaurantId: number;
    @Prop()
    placeId: string;
    @Prop()
    isActive: boolean;
    @Prop()
    restaurantName: string;
    @Prop()
    address: string;
    @Prop()
    photos: Photo[];
    @Prop()
    latitude: number;
    @Prop()
    longitude: number;
    @Prop()
    phone: string;
    @Prop()
    international_phone: string;
    @Prop()
    iconUrl: string;
    @Prop()
    iconBackgroundColor: string;
    @Prop()
    iconMaskUrl: string;
    @Prop()
    priceLevel: number;
    @Prop()
    rating: number;
    @Prop()
    reviews: Review[];
    @Prop()
    types: string;
    @Prop()
    googleUrl: string;
    @Prop()
    userRatingsCount: number;
    @Prop()
    utcOffset: number;
    @Prop()
    website: string;
    @Prop()
    timings: Timings;

}
class Photo {
    photoId: number;
    url: string;
}
class Review {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}
class Timings {
    mondayOpeningHours: number;
    mondayOpeningMinutes: number;
    mondayClosingHours: number;
    mondayClosingMinutes: number;

    tuesdayOpeningHours: number;
    tuesdayOpeningMinutes: number;
    tuesdayClosingHours: number;
    tuesdayClosingMinutes: number;

    wednesdayOpeningHours: number;
    wednesdayOpeningMinutes: number;
    wednesdayClosingHours: number;
    wednesdayClosingMinutes: number;

    thursdaydayOpeningHours: number;
    thursdaydayOpeningMinutes: number;
    thursdaydayClosingHours: number;
    thursdaydayClosingMinutes: number;

    fridayOpeningHours: number;
    fridayOpeningMinutes: number;
    fridayClosingHours: number;
    fridayClosingMinutes: number;

    saturdayOpeningHours: number;
    saturdayOpeningMinutes: number;
    saturdayClosingHours: number;
    saturdayClosingMinutes: number;

    sundayOpeningHours: number;
    sundayOpeningMinutes: number;
    sundayClosingHours: number;
    sundayClosingMinutes: number;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);