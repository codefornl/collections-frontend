export interface links {
    self: {
        href: string;
    },
    home: {
        href: string;
    },
    filter: {
        href: string;
        templated: boolean;
    }
}
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