interface ProductDescriptionModel {
    title: string
    description: string
    price: number
    discountPercentage: number,
    formerPrice: number
    brand: string
}

export const product: ProductDescriptionModel = {
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description: "  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.00,
    discountPercentage: 50,
    formerPrice: 250.00
}