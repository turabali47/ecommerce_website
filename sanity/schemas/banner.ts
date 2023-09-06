export const CTA:string[] = [
    "Shop Now",
    "Click Here",
    "More Info",
    "Get Your Discount"
]

const banner = {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields:[
        {
            name: 'promo_title',
            title: 'Promo Title',
            type: 'string'
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'promo_title'}
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot:true},
            fields:[
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },

        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type:"block"}],
        },

        {
            name: 'cta_button',
            title: 'CTA Button Text',
            type: 'string',
            options: {list:CTA}
        },

        
    ]
}

export default banner;