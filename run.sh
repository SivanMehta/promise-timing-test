for (( i = 1000; i <= 10000; i+=1000 )); do
  node promises.js $i > concurrent-data/data-$i.csv &
done