var express = require('express');
var router = express.Router();
var Livro = require('../controllers/livros')

router.get('/books', function(req, res, next){
  if (req.query.character) {
    Livro.getLivrosByCharacter(req.query.character)
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
  } 
  else if (req.query.genre) {
    Livro.getLivrosByGenre(req.query.genre)
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else if (req.query.author) {
    Livro.getLivrosByAuthor(req.query.author)
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
  }  
  else {
    Livro.list()
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
  }
})

router.get('/books/genres', function(req, res, next){
  Livro.getAllGenres()
  .then(data => res.status(200).jsonp(data))
  .catch(erro => res.status(500).jsonp(erro))
})

router.get('/books/characters', function(req, res, next){
  Livro.getAllCharacters()
  .then(data => res.status(200).jsonp(data))
  .catch(erro => res.status(500).jsonp(erro))
})

router.get('/books/:id', function(req, res, next){
  var id = req.params.id
  Livro.getById(id)
  .then(data => res.status(200).jsonp(data))
  .catch(erro => res.status(500).jsonp(erro))
})

router.delete('/books/:id', function(req, res, next) {
  var id = req.params.id
  Livro.delete(id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.put('/books/:id', function(req, res, next) {
  Livro.update(req.params.id,req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.post('/books', function(req, res, next) {
  console.log(req.body)
  Livro.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;