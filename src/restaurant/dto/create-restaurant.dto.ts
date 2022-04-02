export class CreateRestaurantDto {
    restaurantId: number;
    placeId: string;
    isActive: boolean;
    restaurantName: string;
    address: string;
    photos: Photo[];
    latitude: number;
    longitude: number;
    phone: string;
    international_phone: string;
    iconUrl: string;
    iconBackgroundColor: string;
    iconMaskUrl: string;
    priceLevel: number;
    rating: number;
    reviews: Review[];
    types: string;
    googleUrl: string;
    userRatingsCount: number;
    utcOffset: number;
    website: string;
    timings: Timings;
}

export class Photo {
    photoId: number;
    url: string;
}
export class Review {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}
export class Timings {
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