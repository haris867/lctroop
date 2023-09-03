export const fetchUrl =
  "https://ft6jmh4l.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A++%22categories%22%3A+*%5B_type+%3D%3D+%22categories%22%5D%2C%0A++%22creators%22%3A+*%5B_type+%3D%3D+%22creators%22%5D+%7B%0A++++...%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++%22category%22%3A+*%5B_type+%3D%3D+%22categories%22+%26%26+_id+%3D%3D+%5E.category._ref%5D%5B0%5D%0A++%7D%0A%7D";

export const fetchUrlNews =
  "https://ft6jmh4l.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22news%22%5D+%7B%0A%22title%22%3A+title%2C%0A%22id%22%3A+_id%2C%0A++%22created%22%3A+_createdAt%2C%0A%22mainImageUrl%22%3A+mainImage.asset-%3Eurl%2C%0A%22subheading%22%3A+subheading%2C%0A%22paragraph1%22%3A+paragraph1%2C%0A%22paragraph2%22%3A+paragraph2%2C%0A%22paragraph3%22%3A+paragraph3%2C%0A%22image1Url%22%3A+image1.asset-%3Eurl%2C%0A%22paragraph4%22%3A+paragraph4%2C%0A%22paragraph5%22%3A+paragraph5%2C%0A%22paragraph6%22%3A+paragraph6%2C%0A%22image2Url%22%3A+image2.asset-%3Eurl%2C%0A%22paragraph7%22%3A+paragraph7%2C%0A%22paragraph8%22%3A+paragraph8%2C%0A%22paragraph9%22%3A+paragraph9%2C%0A%7D%0A%0A";

export const accessToken =
  "skGrPzzb46My1DVKLXNAKEjzPTmZB7t1XbJoQNpZtMKzzEOnWPs94ccn6LZQjaSWyyOEnmjIBCZwPfm08RM8thoRXNMrzVoFldgFd8vsz7s2sEgm9lxNMKrrfpld1ZDGnTi94GS7PE5Eaf8T1p1iYQIkbz24xCAbvjPJboC7ol2qFdXGBrZK";
