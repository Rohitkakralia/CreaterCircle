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
        amount: amount/100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message
    })

    return x;
}

export const fetchuser = async(username) => {
    await connectDB();
    console.log(username);
    let u = await User.findOne({ username: username });
    let user = u.toObject({flattenOjectIds: true});
    return user;
}

//fetchPayment
// fetchPayment
export const fetchPayments = async (username) => {
    if (!username) {
        throw new Error("Username is required to fetch payments.");
    }

    await connectDB();

    // Find payments for the user, sorted by amount in descending order
    const payments = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .lean(); // Convert MongoDB objects to plain JavaScript objects

    return payments; // Returns an array of payment objects
};


export const updateProfile = async(data, oldusername) => {
    await connectDB();
    const ndata = Object.fromEntries(data);
    if(oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username });
        if(u) {
            return {error: "Username already exists"}
        }   
    }
    await User.updateOne({email: ndata.email}, ndata)
}