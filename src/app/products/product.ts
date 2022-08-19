export interface IProduct{
    id: number;
    productId: number;
    productName: string;
    productCode: string; 
    releaseDate?: string;
    price: number;
    description?: string;
    starRating: number;
    imageUrl?: string;
}

export interface IProductForm{
    productName: string;
    productCode: string;
    price: number;
    starRating: number;
}