import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect("mongodb+srv://sekhararipaka456:Hn7jtJRwecHVoe6f@cluster0.j8um9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}