import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true,
    },
    customer_number: {
        type: String,
        required: true,
    },
    order_id: {
        type: String,
        required: true,
        unique: true,
    },
    order_details: [
        {
            item_name: {
                type: String,
                required: true,
            },
            item_quantity: {
                type: Number,
                required: true,
            },
            item_price: {
                type: Number,
                required: true,
            },
            item_id: {
                type: Number,
                required: true,
            }
        },
    ],
    order_date: {
        type: Date,
        default: Date.now,
    },
    order_comments: {
        type: String,
        default: '',
    },
    payment_method: {
        type: String,
        required: true,
        enum: ['Картой', 'Наличными','На сайте']
    },
    status: {
        type: String,
        default: 'progress',
        enum: ['progress', 'completed', 'failed']
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;