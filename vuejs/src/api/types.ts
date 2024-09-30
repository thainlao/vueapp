export interface IProducts {
    itemName: string;
    itemPrice: number;
    weight: number;
    id: number
    img: string
    quantity?: number;
}

export interface IProductData {
    item_name: string,
    item_quantity: number,
    item_price: number,
    item_id: string | number,
}

export interface IOrders {
    _id: string | null;
    customer_name: string;
    customer_number: string | number;
    order_id: string;
    order_details: IProductData[];
    order_comments: string | null;
    payment_method?: string;
    order_date: string;
}