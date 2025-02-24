export interface IMenuItem {
    image: string;
    name: string;
    desc: string;
    price: string | number;
}

type TMenuItem = IMenuItem[]

export interface IPopularMenu {
    breakfast: TMenuItem;
    dinner: TMenuItem;
    lunch: TMenuItem;
    dessert: TMenuItem;
    drink: TMenuItem;
}

export interface Ichef {
    name: string;
    image: string;
    job: string;
    bgColor: string;
}

export interface contactForm {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}