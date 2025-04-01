var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/entidades/:idAutor', async (req, res) => {
  axios.get('http://localhost:17000/books?author=' + req.params.idAutor)
  .then(resp => {
      data = resp.data
      res.render('AuthorPage', {
        title: 'Livro',
        livros: data,
        autor: req.params.idAutor
    });
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:17000/books/' + req.params.id)
  .then(resp => {
      data = resp.data
      res.render('BookPage', {
        title: 'Livro',
        livro: data,
    });
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});


router.get('/', function(req, res, next) {
  axios.get('http://localhost:17000/books')
  .then(resp => {
      data = resp.data
      res.render('BookList', {
        title: 'Livros',
        livros: data,
    });
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});


module.exports = router;
