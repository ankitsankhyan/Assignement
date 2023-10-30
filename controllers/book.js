const Book = require('../models/Book');
module.exports.create = async (req, res) => {
  const { title, auther, description } = req.body;
    const book = new Book({ title, auther, description });
    await book.save();
    return res.status(201).json({
       data:book,
       
    });

};


module.exports.deletebook = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    let book = await Book.findById(id);
    if(!book) return res.status(404).json({
        message: 'Book not found!',
    });
    
    await Book.findByIdAndDelete(id);
    return res.status(201).json({
        message: 'Book deleted!',
    });
}


module.exports.updatebook = async (req, res) => {
 const { id } = req.params;
    const { title, auther, description } = req.body;
    
    let book = await Book.findById(id);
    if(!book) return res.status(404).json({
        message: 'Book not found!',
    });
    book.title = title;
    book.auther = auther;
    book.description = description;

    await book.save();
    return res.json({
        message: 'Book updated!',
        updated: book
    });

};

module.exports.booklist = async(req, res)=>{
    const books = await Book.find({});
    return res.status(201).json({
        books,
    });
}

module.exports.getbook = async(req, res)=>{
   const id = req.params.id;
   const book = await Book.findById(id);
    if(!book) return res.status(404).json({
         message: 'Book not found!',
    });
    return res.json({
         book,
    });
}