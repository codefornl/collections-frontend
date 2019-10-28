import { links } from './common';

export interface UsecaseLinks extends links {
    self_slug: {
        href: string;
    },
    usecases: {
        href: string;
    }
}

export class Usecase {
    id: string;
    cbase_id: string;
    name: string;
    slug: string;
    teaser: string;
    description: string;
    image: string;
    type: string;
    location: string;
    country: string;
    category: string;
    organisation: string;
    website: string;
    download: string;
    license: string;
    contact_name: string;
    contact_email: string;
    _links: UsecaseLinks;

}

export interface UsecaseResponse extends Usecase { }