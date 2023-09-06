import { Image, PortableTextBlock } from "sanity";

export type Products = {
    _id:string;
    _createdAt:string;
    _updatedAt:string;
    title:string;
    slug: string;
    description: PortableTextBlock;
    category: string;
    subCategory: string;
    color:string;
    images:Image[];
    sale:boolean;
    discount:number;
    available:boolean;
    price:number;
}



export type ProductsForCard = {
    _id:string;
    title:string;
    slug:string;
    category:string;
    subCategory:string;
    color:string;
    images:Image,
    sale:boolean;
    discount:number;
    available:boolean;
    price:number;
}