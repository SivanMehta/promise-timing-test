data.csv:
	node promises.js > data.csv

plots/plot.png: data.csv
	Rscript plot.R

plots/in-theory.png:
	Rscript in-theory.R
