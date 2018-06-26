library(ggplot2)

tibble(x = 1:10, y = 10) %>%
  ggplot() +
  aes(x, y) +
  geom_point(size = 5) +
  labs(x = "Duration in seconds", y = "Estimate in seconds")

ggsave("plots/in-theory.png", width = 6, height = 3)
