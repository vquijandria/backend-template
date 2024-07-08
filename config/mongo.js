const mongoose = require('mongoose');


async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1); // Optionally exit process if connection fails
    }
}
/*const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err){
            console.log('Connected to MongoDB')
        }
        else {
            console.log('Error connecting to MongoDB')
        }
    }
);
}
*/
module.exports = { dbConnect };