"use server"

import Razorpay from 'razorpay'
import Payment from '@/models/Payment'
import connectDB from '../db/connectDb'
import User from '@/models/User'

export const initiate = async(amount, to_username, paymentform) => {
    await connectDB();
    const Razorpay = require('razorpay');
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET})

    // instance.orders.create({
    //     amount: 50000,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //     currency: "INR", 
    //     receipt: "receipt#1",
    //     notes: {
    //         key1: "value3",
    //         key2: "value2"
    //     }
    // })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    //create a payment object which shows a pending payment in the database
    await Payment.create({
        oid: x.id,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message
    })

    return x;
}

export const fetchuser = async(username) => {
    connectDB();
    console.log(username);
    let u = await User.findOne({ username: username });
    let user = u.toObject({flattenOjectIds: true});
    return user;
}

//fetchPayment
export const fetchPayments = async(username) => {
    await connectDB();
    //find all payment sorted by decresing order of amount and flatten the object
    let payments = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean();
    return payments;
}