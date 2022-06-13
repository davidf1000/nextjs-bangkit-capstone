import { faker } from '@faker-js/faker';
import moment from 'moment';
import { Transaction } from '../pages/dashboard/dashboard.types';

const category = ['Electronic', 'Fashion', 'Food', 'Transportation', 'Ecommerce']

const createTransaction = ():Transaction => ({
    Date: moment(faker.date.betweens('2022-01-01T00:00:00.000Z', '2022-05-01T00:00:00.000Z')[0]).format('YYYY:MM:DD'),
    voucherName : "Free " + Math.floor(Math.random() * 5) + " " +faker.commerce.product(),
    category : category[Math.floor(Math.random() * category.length)],
    quantity : Math.floor(Math.random() * 5),
    totalPrice : Math.floor(Math.random() * 1000)
})

const createRandomTransactions = (num:number = 10):Transaction[] => {
    return Array.from({length: num},createTransaction);
  };

export default createRandomTransactions;