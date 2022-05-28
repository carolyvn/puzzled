const { Schema, model } = require('mongoose');

const puzzleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    difficulty: {
        type: Number,
        required: false, 
    },
    img: {
        data: Buffer,
        contentType: String,
        required: false, 
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Puzzle = model('Puzzle', puzzleSchema);

module.export = Puzzle;