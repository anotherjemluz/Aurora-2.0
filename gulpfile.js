var gulp = require('gulp'); //chama o gulp no projeto
var sass = require('gulp-ruby-sass')//chama o sass no proj
var watch = require('gulp-watch')//chama o watch no proj

gulp.task('sass', function(){
   return sass('sass/**/*.sass').pipe(gulp.dest('css'));//compila em css os arquivos .sass 
});

gulp.task('watch', function(){
   gulp.watch('sass/**/*.sass', ['sass']); 
});

gulp.task('default', ['sass', 'watch']);//executa as tasks acima automaticamente