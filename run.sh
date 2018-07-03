for (( i = 100; i < 2000; i+=100 )); do
  node promises.js $i > concurrent-data/data-$i.csv &
done