export const fetchUrl =
  "https://ft6jmh4l.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A++%22categories%22%3A+*%5B_type+%3D%3D+%22categories%22%5D%2C%0A++%22creators%22%3A+*%5B_type+%3D%3D+%22creators%22%5D+%7B%0A++++...%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++%22category%22%3A+*%5B_type+%3D%3D+%22categories%22+%26%26+_id+%3D%3D+%5E.category._ref%5D%5B0%5D%0A++%7D%0A%7D";

export const accessToken =
  "skGrPzzb46My1DVKLXNAKEjzPTmZB7t1XbJoQNpZtMKzzEOnWPs94ccn6LZQjaSWyyOEnmjIBCZwPfm08RM8thoRXNMrzVoFldgFd8vsz7s2sEgm9lxNMKrrfpld1ZDGnTi94GS7PE5Eaf8T1p1iYQIkbz24xCAbvjPJboC7ol2qFdXGBrZK";
