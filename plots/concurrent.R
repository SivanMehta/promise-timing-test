library(dplyr)
library(ggplot2)

# get initial file
data <- read.csv('concurrent-data/data-1000.csv')

# append all the others
for (i in seq(2000, 10000, 1000)) {
  next.data <- read.csv(paste(c('concurrent-data/data-', i, '.csv'), collapse=""))
  a <- paste('duration', i-1000)
  b <- paste('duration', i)
  data <- data %>%
    left_join(next.data, by = 'iteration') %>%
    mutate(as.symbol(a) = duration.x, as.symbol(b) = duration.y) %>%
    select(iteration, as.symbol(a), as.symbol(b))
}

data %>%
  ggplot() +
  aes(iteration, duration) +
  geom_line()
