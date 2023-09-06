import { PortableTextBlock } from "sanity";

export type Banner = {
    _id:string;
    promo_title:string;
    description: PortableTextBlock;
    image:string;
    cta_button:string;
}