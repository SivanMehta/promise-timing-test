library(ggplot2)
library(dplyr)

data <- read.csv('data.csv')
data %>%
  mutate(estimate = eta + duration) %>%
  filter(estimate < 12) %>%
  filter(estimate > 8) %>%
  filter(duration > 1) %>%
  ggplot() +
  aes(duration, estimate) +
  geom_line() +
  geom_hline(yintercept = 10, linetype = 2) +
  labs(x = "duration in seconds", y = "estimate in seconds")

ggsave('plot.png', height = 3, width = 6)