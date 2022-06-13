import { faker } from '@faker-js/faker';
import { Voucher } from '../pages/dashboard/dashboard.types';

const category = ['Electronic', 'Fashion', 'Food', 'Transportation', 'Ecommerce']

const createVoucher = ():Voucher => ({
    voucherId: faker.datatype.uuid(),
    partnerId: faker.datatype.uuid(),
    partnerName: '',
    voucherName: "Free " + Math.floor(Math.random() * 5) + " " +faker.commerce.product() ,
    voucherDesc: faker.company.bs(),
    category: category[Math.floor(Math.random() * category.length)],
    imageUrl: faker.image.food(),
    stock: Math.floor(Math.random() * 5),
    price: Math.floor(Math.random() * 1000)
})

const createVouchers = (numVouchers:number = 6):Voucher[] => {
    // const company = faker.company.companyName()
    return Array.from({length: numVouchers},createVoucher);
  };

export default createVouchers;