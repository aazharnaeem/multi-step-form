export type PersonalInformation = {
    firstName: string,
    lastName: string,
    age: number,
    number: number,
}
export type AddressType = {
    country: string,
    city: string,
    address: string,
    street: string,
    zipCode: number
}

export type AccountType = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,

}

export interface Props {
    submit: React.Dispatch<React.SetStateAction<number>>;
    setFormValues: React.Dispatch<React.SetStateAction<{}>>;
    prevValues: any;
}