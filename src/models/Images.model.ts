import prod1 from '../assets/images/image-product-1.jpg'
import prod2 from '../assets/images/image-product-2.jpg'
import prod3 from '../assets/images/image-product-3.jpg'
import prod4 from '../assets/images/image-product-4.jpg'
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'

interface IImage {
    id: number
    src: string
    alt: string,
    isActive: boolean
}

export const bigImages: IImage[] = [
    {
        id: 1,
        src: prod1,
        alt: 'image-product-1',
        isActive: true
    },
    {
        id: 2,
        src: prod2,
        alt: 'image-product-2',
        isActive: false
    },
    {
        id: 3,
        src: prod3,
        alt: 'image-product-3',
        isActive: false
    },
    {
        id: 4,
        src: prod4,
        alt: 'image-product-4',
        isActive: false
    }
]

export const thumbnails: IImage[] = [
    {
        id: 1,
        src: thumb1,
        alt: 'image-product-1-thumbnail',
        isActive: false,
    },
    {
        id: 2,
        src: thumb2,
        alt: 'image-product-2-thumbnail',
        isActive: false
    },
    {
        id: 3,
        src: thumb3,
        alt: 'image-product-3-thumbnail',
        isActive: false
    },
    {
        id: 4,
        src: thumb4,
        alt: 'image-product-4-thumbnail',
        isActive: false
    }
]