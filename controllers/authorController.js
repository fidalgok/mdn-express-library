const Author = require('../models/author');

//Display list of all authors
exports.author_list = (req, res) => {
    res.send('Not Implemented: Author List');
}

// Display detail for a specific Author
exports.author_detail = (req, res) => {
    res.send('Not Implented: Author Detail: ' + req.params.id);
}

//Display Author create form on GET
exports.author_create_get = (req, res) => {
    res.send('Not Implemented: Author create Get');
}

//Handle Author create on POST
exports.author_create_post = (req, res) => {
    res.send('Not Implemented: Author create POST');
}

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};