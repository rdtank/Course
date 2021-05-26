import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization:
      'Bearer I5rn1TZkTe7WTfbGAbLQTc2z2Irq5AWGy83t4Jx6qHswuyt-iWXd5IYyd99we-DRBM-WJOZtCaaGqTx6sbuCQgceGdHw_CV63u-beka4AANBRyAg7qrHKRuvqcmUYHYx',
  },
});
