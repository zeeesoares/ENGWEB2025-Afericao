var Livro = require('../models/livro')

module.exports.list = () => {
    return Livro.find()
                .exec()   
}

module.exports.getById = (id) => {
    return Livro.findOne({_id : id})
                .exec()   
}

module.exports.listGenres = () => {
    return Livro.distinct("genres").exec 
}

module.exports.getLivrosByCharacter = (character) => {
    return Livro.find({ characters: {$in : character}}).exec()
};


module.exports.getLivrosByAuthor = (author) => {
    return Livro.find({ author: {$in : author}}).exec()
};

module.exports.getAllGenres = () => {
    return Livro.aggregate([
        { $unwind: "$genres" }, // Unwind the "genres" array to process each genre individually
        { $group: { _id: "$genres" } }, // Group by genres to eliminate duplicates
        { $sort: { _id: 1 } }, // Sort genres alphabetically
        { $project: { _id: 0, genre: "$_id" } } // Return only the genre without the _id field
    ]).exec(); // Ensure the promise is returned
};

module.exports.getAllCharacters = () => {
    return Livro.aggregate([
        { $unwind: "$characters" }, // Unwind the "characters" array to process each genre individually
        { $group: { _id: "$characters" } }, // Group by characters to eliminate duplicates
        { $sort: { _id: 1 } }, // Sort characters alphabetically
        { $project: { _id: 0, character: "$_id" } } // Return only the genre without the _id field
    ]).exec(); // Ensure the promise is returned
};

module.exports.insert = livro => {
    if (Livro.find({_id : livro._id}).exec.lenght != 1) {
        var newLivro = new Livro(livro)
        newLivro._id = livro._id
        return newLivro.save()
    }
}


module.exports.update = (id, livro) => {
    return Livro
        .findOneAndReplace({ _id: id }, livro, { new: true })
        .exec();
}


module.exports.delete = (id) => {
    return Livro.findByIdAndDelete(id).exec();
}