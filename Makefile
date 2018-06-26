data.csv:
	node promises.js > data.csv

plot.png: data.csv
	Rscript plot.R
