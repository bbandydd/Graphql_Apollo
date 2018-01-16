import mongoose from 'mongoose';
import uuid from 'node-uuid';

const schema = mongoose.Schema;

const autorSchema = new schema({
    id: {type: String, default: uuid.v1},
    name: String,
    age: Number,
    books: [String],
});

const model = mongoose.model('author', autorSchema);

export default model;
