import { ParsedUrlQuery } from 'querystring';

export interface ProductPageParams extends ParsedUrlQuery {
    id: string;
}

export interface ProductPageProps {
    params: ProductPageParams;
}