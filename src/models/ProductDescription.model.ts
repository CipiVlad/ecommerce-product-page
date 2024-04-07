interface ProductDescriptionModel {
    title: string
    description: string
    price: number
    discountPercentage: number,
    formerPrice: number
    brand: string
}

export const product: ProductDescriptionModel = {
    brand: "Sneakers Company",
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a classic look and modernised comfort, these shoes are perfect for any casual wear.",
    price: 125.00,
    discountPercentage: 50,
    formerPrice: 250.00
}