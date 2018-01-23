import mongoose from 'mongoose';
import authorModel from './models/author';

const resolvers = {
    Query: {
        authors: (source, args, root, ast) => {
            console.log(ast.fieldNodes[0].selectionSet.selections.map(select => select.name.value));
            return authorModel.find({ age: args.age });
        },
        author: (root, { id }) => {
            return authorModel.findOne({ id });
        }
    },
    Mutation: {
        addAuthor: (root, { name, age, books }) => {
            const author = new authorModel({
                name, age, books,
            });

            return author.save();
        },
        deleteAuthor: (root, { id }) => {
            return authorModel.findOneAndRemove({ id });
        },
        updateAuthor: (root, { id, name }) => {
            return authorModel.findOneAndUpdate({ id }, { name });
        }
    },
};

export default resolvers;