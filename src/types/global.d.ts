declare global {
  type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  type Geo = {
    lat: string;
    lng: string;
  };

  type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  };

  type Person = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
  };
}

export {};
