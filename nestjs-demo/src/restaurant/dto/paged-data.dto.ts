import { RestaurantDto } from "./create-restaurant.dto";
export class PagedData {
    restaurants: RestaurantDto[];
    totalRows: number;
}