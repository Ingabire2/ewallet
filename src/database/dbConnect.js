import mongoose from 'mongoose';
import config from '../helpers/config';

const connectDb = async () => {
  const URL = config.MONGO_URL || 'mongodb://127.0.0.1:27017/ewallet'
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('database connected successfully!!'))
    .catch((err) => console.log('err', err));
};

export default connectDb;