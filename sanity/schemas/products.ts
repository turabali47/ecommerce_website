import { defineArrayMember, defineField, defineType } from "sanity"
import { category } from "./category"


export const products =defineType( {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'}
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type:'block'}]
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [
                    {
                        type: "category"
                    }
                ]
            
        }),

        defineField({
            name: 'subCategory',
            title: 'Sub-Category',
            type: 'string'
        }),

        defineField({
            name: 'color',
            title: 'Color',
            type: 'string'
        }),

        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image', 
                    options: {hotspot:true},
                    fields:[defineField(
                            {
                                name: 'alt',
                                title: 'Alt',
                                type: 'string'
                            })]
                             
                })]
            
        }),

        defineField({
            name: 'sale',
            title: 'Sale',
            type: 'boolean',
        }),

        defineField({
            name: 'discount',
            title: 'Discount (%)',
            type: 'number',
            hidden: ({document}) => !document?.sale
        }),

        defineField({
            name: 'available',
            title: 'Available',
            type: 'boolean'
        }),

        defineField({
            name: 'price',
            title: 'Price',
            type: 'number'
        })
    ]
})