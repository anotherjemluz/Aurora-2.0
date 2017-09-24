var gulp = require('gulp'); //chama o gulp no projeto
var sass = require('gulp-ruby-sass')//chama o sass no proj

gulp.task('sass', function(){
   return sass('sass/*.sass').pipe(gulp.dest('css'));//compila em css os arquivos .sass 
});