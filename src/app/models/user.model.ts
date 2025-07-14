type Location = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export type User = {
  name: {
    title: string,
    first: string,
    last: string,
  };
  gender: string;
  picture: {
    "large": string,
    "medium": string,
    "thumbnail": string
  };
  location: Location
  email: string;
}
