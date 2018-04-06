var Book = require("../models/book");
const Bookinstance = require("../models/bookInstance");

exports.index = function(req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
exports.book_list = function(req, res) {
  Book.find({}, 'title author')
    .populate('author')
    .exec()
    .then(list_books => {
      
      res.render('booklist', {title: 'Title', list_books });
    })
    .catch(err => next(err));
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
  bookPromise = Book.findById(req.params.id)
    .populate('author')
    .populate('genre')
    .exec();
  bookinstancePromise = Bookinstance.find({book: req.params.id});

  Promise.all([bookPromise, bookinstancePromise])
    .then(([book, bookinstance]) => {
      if(book == null){
        //no results
        var err = new Error("Book not found");
        err.status = 404;
        next(err);
      }
      res.render('book_detail', {title: "Book Detail", book, bookinstance});
    })
    .catch(err => {
      next(err);
    })
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Book update POST");
};
