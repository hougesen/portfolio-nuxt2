# portfolio

Portfolio with Github integration to fetch pinned repositories.

Currently using this as my own portfolio, which can be seen at [mhouge.dk](https://mhouge.dk).

Feel free to use it as a template if you wish.

## Fetching pinned repositories

To fetch pinned repositories you have to create a Github personal access token (only public permisssions needed)

I currently have the function to fetch my pinned repositories seperated into an [AWS Lambda function](./aws-lambda-fetch-pinned/README.md)), so I don't have to expose my Github access token. If you don't care about that or wish to call the api from the frontend, then the following query can be used:

```js
const query = gql`
  query GET_PROJECTS {
    user(login: `${YOUR_GITHUB_HANDLE}`) {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            name
            languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
              nodes {
                color
                name
              }
            }
            description
            homepageUrl
            url
          }
        }
      }
    }
  }
`;
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).
