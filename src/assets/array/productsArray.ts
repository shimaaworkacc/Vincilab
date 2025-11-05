import image0 from '../../assets/images/image1.png'
import image1 from '../../assets/images/image2.png'
import image2 from '../../assets/images/image3.png'
import image3 from '../../assets/images/image4.png'
import image4 from '../../assets/images/image5.png'
import image5 from '../../assets/images/image6.png'
import image6 from '../../assets/images/image7.png'
import image7 from '../../assets/images/image8.png'
import image8 from '../../assets/images/image9.png'
import image9 from '../../assets/images/image10.png'
import image10 from '../../assets/images/image11.png'
import image11 from '../../assets/images/image12.png'
import image12 from '../../assets/images/image13.png'
// import image13 from '../../assets/images/image14.png'
// import image14 from '../../assets/images/image15.png'
// import image15 from '../../assets/images/image16.png'
// import image16 from '../../assets/images/image17.png'
// import image17 from '../../assets/images/image18.png'
// import image18 from '../../assets/images/image19.png'
// import image19 from '../../assets/images/image20.png'
import { ProductInterface } from '@/interfaces/product.interface'

export default function productarray(): ProductInterface[] {
    const products: ProductInterface[] = [
{
    _id: "1",
    title: "Morning Mist Over Willow Creek",
    slug: "your-product-link-1",
    description: "A tranquil oil painting depicting a peaceful morning with soft mist rising from a winding creek, surrounded by lush willows and distant hills. The light is gentle and warm, inviting contemplation.",
    quantity: 1,
    price: 1200,
    imageCover: image0,
    category: {
        _id: "1",
        name: "Landscape",
        slug: "landscape",
        image: image0
    },
    subcategory: [],
    ratingsAverage: 4.5,
    ratingsQuantity: 100,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: "1"
},
        {
            _id: "2",
            title: "Urban Jazz Night",
            slug: "your-product-link-2",
            description: "Vibrant acrylic painting capturing the energy of a city jazz club, with bold colors and dynamic brush strokes representing music and movement.",
            quantity: 1,
            price: 980,
            imageCover: image1,
            category: {
                _id: "2",
                name: "Contemporary",
                slug: "contemporary",
                image: image1
            },
          subcategory: [],

            ratingsAverage: 4.7,
            ratingsQuantity: 150,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "2"
        },
        {
            _id: "3",
            title: "Seaside Memories",
            slug: "your-product-link-3",
            description: "Watercolor piece showing a serene beach scene with gentle waves and seabirds at sunset, evoking nostalgic summer memories.",
            quantity: 1,
            price: 850,
            imageCover: image2,
            category: {
                _id: "3",
                name: "Seascape",
                slug: "seascape",
                image: image2
            },
           subcategory: [],

            ratingsAverage: 4.6,
            ratingsQuantity: 120,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "3"
        },
        {
            _id: "4",
            title: "Forest Whispers",
            slug: "your-product-link-4",
            description: "Abstract interpretation of a dense forest in autumn, using rich earth tones and textured techniques to create depth and mystery.",
            quantity: 1,
            price: 1400,
            imageCover: image3,
            category: {
                _id: "4",
                name: "Abstract",
                slug: "abstract",
                image: image3
            },
            subcategory: [],

            ratingsAverage: 4.8,
            ratingsQuantity: 200,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "4"
          },  {
            _id: "5",
            title: "Desert Storm",
            slug: "your-product-link-5",
            description: "Dynamic oil painting of a approaching storm in the desert, with dramatic clouds and golden sand dunes.",
            quantity: 1,
            price: 1100,
            imageCover: image4,
            category: {
                _id: "5",
                name: "Landscape",
                slug: "landscape",
                image: image4
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "5"
        },
        {
            _id: "6",
            title: "City Lights",
            slug: "your-product-link-6",
            description: "Modern impressionist view of city lights reflected in rain-soaked streets, creating a symphony of colors.",
            quantity: 1,
            price: 950,
            imageCover: image5,
            category: {
                _id: "6",
                name: "Cityscape",
                slug: "cityscape",
                image: image5
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "6"
        },
        {
            _id: "7",
            title: "Mountain Majesty",
            slug: "your-product-link-7",
            description: "Large-scale oil painting of snow-capped mountains at dawn, with dramatic lighting and atmospheric perspective.",
            quantity: 1,
            price: 1600,
            imageCover: image6,
            category: {
                _id: "7",
                name: "Landscape",
                slug: "landscape",
                image: image6
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "7"
        },
        {
            _id: "8",
            title: "Urban Revolution",
            slug: "your-product-link-8",
            description: "Edgy mixed media piece depicting urban industrial landscapes with geometric patterns and metallic elements.",
            quantity: 1,
            price: 1300,
            imageCover: image7,
            category: {
                _id: "8",
                name: "Urban",
                slug: "urban",
                image: image7
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "8"
        },
        {
            _id: "9",
            title: "Ocean's Soul",
            slug: "             your-product-link-9",
            description: "Abstract seascape capturing the power and movement of ocean waves using various shades of blue and white.",
            quantity: 1,
            price: 1150,
            imageCover: image8,
            category: {
                _id: "9",
                name: "Abstract",
                slug: "abstract",
                image: image8
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "9"
        },
        {
            _id: "10",
            title: "Autumn Symphony",
            slug: "your-product-link-10",
            description: "Colorful representation of fall foliage in a park setting, with emphasis on red and golden hues.",
            quantity: 1,
            price: 890,
            imageCover: image9,
            category: {
                _id: "10",
                name: "Nature",
                slug: "nature",
                image: image9
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "10"
        },
        {
            _id: "11",
            title: "Night Market",
            slug: "your-product-link-11",
            description: "Vibrant street scene of an Asian night market, full of life, lights, and local character.",
            quantity: 1,
            price: 1050,
            imageCover: image10,
            category: {
                _id: "11",
                name: "Cultural",
                slug: "cultural",
                image: image10
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "11"
        },
        {
            _id: "12",
            title: "Prairie Sunset",
            slug: "your-product-link-12",   
            description: "Minimalist landscape showcasing the vast open plains during a spectacular sunset.",
            quantity: 1,
            price: 920,
            imageCover: image11,
            category: {
                _id: "12",
                name: "Landscape",
                slug: "landscape",
                image: image11
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "12"
        },
        {
            _id: "13",
            title: "Vintage Cafe",
            slug: "your-product-link-13",
            description: "Nostalgic scene of a Parisian café, with attention to architectural details and atmosphere.",
            quantity: 1,
            price: 870,
            imageCover: image12,
            category: {
                _id: "13",
                name: "Urban",
                slug: "urban",
                image: image12
            },
            subcategory: [],
            ratingsAverage: 4.5,
            ratingsQuantity: 100,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: "13"
        },
        // ["14","your-product-link-14", image13, "Vintage Cafe", "870", "Nostalgic scene of a Parisian café, with attention to architectural details and atmosphere.", "Pierre Dubois", "Urban"],
        // ["15","your-product-link-15", image14, "Dance of Light", "1250", "Abstract composition exploring the interaction of light and shadow through geometric forms.", "Maya Ray", "Abstract"],
        // ["16","your-product-link-16", image15, "Winter's Tale", "1080", "Serene winter landscape with snow-covered trees and a subtle northern lights display.", "Erik Frost", "Landscape"],
        // ["17","your-product-link-17", image16, "Mediterranean Dreams", "940", "Bright and cheerful scene of a Mediterranean village with white buildings and blue sea.", "Isabella Romano", "Architecture"],
        // ["18","your-product-link-18", image17, "Jazz Ensemble", "1180", "Dynamic portrayal of jazz musicians in performance, emphasizing movement and emotion.", "Miles Davis Jr.", "Portrait"],
        // ["19","your-product-link-19", image18, "Rustic Charm", "830", "Detailed study of an old barn with weathered wood and rustic architectural elements.", "Ruth Barnes", "Rural"],
        // ["20","your-product-link-20", image19, "Butterfly Garden", "795", "Delicate watercolor of a garden filled with butterflies and flowering plants.", "Flora Green", "Nature"]
    ]
    
    return (
        products
    )
}
