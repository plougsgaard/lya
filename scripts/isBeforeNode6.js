process.exit(
  (process.versions.node.split('.')[0] < 6) ? 0 : 1
)
