data.csv:
	node promises.js > data.csv

plots/plot.png: data.csv
	Rscript plots/plot.R

plots/in-theory.png:
	Rscript plots/in-theory.R
