export interface IAddress {
  street: string;
  suite: string;
  country: string;
  region: string;
  city: string;
}

export interface IPatient {
  id: number;
  firstName: string;
  secondaryName: string;
  lastName: string;
  address: Array<IAddress>;
  birthday: string;
  phone: string;
}
