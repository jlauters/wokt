
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Whats on Kolby\'s Taps?' });
};
