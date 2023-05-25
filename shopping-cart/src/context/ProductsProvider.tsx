import { createContext } from "react";

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType[] = [ {
    "sku": "item0001",
    "name": "Widget",
    "price": 9.99
},
{
    "sku": "item0002",
    "name": "Premium Widget",
    "price": 29.99
},
{
    "sku": "item0003",
    "name": "Awesome Widget",
    "price": 49.99
}];

export type UseProductsContextType = { products: ProductType[]}

const initContextState: UseProductsContextType = {products: []}

const ProductsContext = createContext<UseProductsContextType>(initContextState);