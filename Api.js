import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://deeper.tornode.org/graphql/',
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
            questionSet {
                id
                content
            } 
        }
    }
`;


export { client, CATEGORIES };
