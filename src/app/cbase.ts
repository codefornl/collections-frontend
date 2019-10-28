import { Usecase } from './usecase';
import { links } from './common';

export interface CbaseLinks extends links {
    self_slug: {
        href: string;
    },
    cbases: {
        href: string;
    }
}

export interface Cbase {
    id: string;
    name: string;
    slug: string;
    description: string;
    admin_name: string;
    admin_email: string;
    image: string;
    language: string;
    promote: boolean;
    logo_image: string;
    _links: CbaseLinks;
    _embedded: {
        usecase: Usecase[];
    }
}
export interface CbasesResponse {
    _links: links,
    _embedded: {
        cbase: Cbase[]
    }
}

export interface CbaseResponse extends Cbase { }