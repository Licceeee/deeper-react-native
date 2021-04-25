import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://deeper-api.tornode.org/graphql/',
    cache: new InMemoryCache(),
    fetchOptions: {
    mode: 'no-cors',
    },
});


const CATEGORIES = gql`
    query {
        categories {
            id
            name
            description
            iconMobile
            iconPackageNameMobile
            questionSet {
                id
                content
            } 
        }
    }
`;

const CATEGORY = gql`
    query GetCat($id: Int!) {
        categoryById(id: $id) {
            name
            description
            iconMobile
            iconPackageNameMobile
            questionSet {
                content
            }
        }
    }
`;



export { client, CATEGORIES, CATEGORY };
