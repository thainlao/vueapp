import Order from '../models/orderModels.js'

export const createOrder = async (req, res) => {
    const createOrderData = req.body;

    try {
        let newOrder = new Order(createOrderData);
        await newOrder.save();

        res.status(201).json({success: true, message: 'Order Successfuly created', order: newOrder})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Ошибка при создании заказа'})
    }
};

export const getAllOrders = async(req, res) => {
    try {
        let allOrders = await Order.find();
        res.json({success: true, allOrders})
    } catch (e) {
        console.log(e);
        res.json({success: false, message: 'Ошибка при получении всех данных'})
    }
}

export const updateOrderStatus = async(req, res) => {
    const {id, status} = req.body;
    try {
        let order = await Order.findByIdAndUpdate(id, {status}, {new: true});
        if (!order) {
            return res.json({success: false, message: 'Заказ не найден'})
        }
    } catch(e) {
        console.log(e)
    }
}

export const deleteOrder = async(req, res) => {
    let {id} = req.body;
    console.log(id)
    try {
        let order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.json({success: false, message: 'Заказ не найден'})
        }
    } catch(e) {
        console.log(e)
    }
}