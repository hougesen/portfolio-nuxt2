const axios = require('axios');

exports.handler = async function () {
  return await axios({
    url: 'https://api.github.com/graphql',
    method: 'POST',
    headers: {
      // Remember to set this in the aws control panel
      authorization: `Bearer ${process.env.PERSONAL_ACCESS_TOKEN}`,
    },
    data: {
      query: `
          query GET_PROJECTS {
            user(login: "Hougesen") {
              pinnedItems(first: 6) {
                nodes {
                  ... on Repository {
                    name
                    languages(
                      first: 3
                      orderBy: { field: SIZE, direction: DESC }
                    ) {
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
        `,
    },
  })
    .then((res) => {
      return res.data.data.user.pinnedItems.nodes;
    })
    .catch((err) => {
      console.log('error fetching repositories', err);
      return [];
    });
};
