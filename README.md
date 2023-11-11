Rscript -e "rmarkdown::render('methodology.Rmd', output_dir = './_site')" &&
Rscript -e "rmarkdown::render('overview.Rmd', output_dir = './_site')" &&
Rscript -e "rmarkdown::render('poster.Rmd', output_dir = './_site')" &&
Rscript -e "rmarkdown::render('index.Rmd', output_dir = './_site')" &&
Rscript -e "rmarkdown::render('about.Rmd', output_dir = './_site')" 




Rscript -e "rmarkdown::render('result.Rmd', output_dir = './_site')" &&