import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Banner } from "@/types/Banner";
import { Products } from "@/types/Product";



export const getCategoriesData = async () => {
    const res = await client.fetch(
        groq `*[_type == "category"]`
    );
    return res;
}

export const getCategoryData = async (category:string) => {
    const res = await client.fetch(
        groq `*[_type == "category"]`,
        {category}
    );
    return res;
}

export const getBannerData = async () => {
   
    const res = await client.fetch(
        groq `*[_type == "banner"]{
            _id,
            promo_title,
            "image": image.asset->url,
            description,
            cta_button,
        }`
    );
    return res;
}

export const getProductsDataForPage = async () => {

    const res = await client.fetch(
        groq `*[_type == "products"]{
            _id,
            _createdAt,
            _updatedAt,
            title,
            "slug": slug.current,
            description,
            category -> {name},
            subCategory,
            color,
            images,
            sale,
            discount,
            available,
            price,
        }`
    )
    return res;
}

export const getProductData = async (slug:string) => {

    const res = await client.fetch(
        groq `*[_type == "products" && slug.current == $slug][0]{
            _id,
            _createdAt,
            _updatedAt,
            title,
            "slug": slug.current,
            description,
            category -> {name},
            subCategory,
            color,
            images,
            sale,
            discount,
            available,
            price,
        }`,
        {slug}
    )
    return res;
}

export const getProductsDataForCard = async () => {

    const res = await client.fetch(
        groq `*[_type == "products"]{
            _id,
            title,
            "slug": slug.current,
            category,
            subCategory,
            color,
            images[0],
            sale,
            discount,
            available,
            price,
        }`
    )
    return res;
}
