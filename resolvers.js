import * as Helpers from "./helpers.js";

const resolvers = {
  Query: {
    users: async () => {
      return await Helpers.getAllUsers();
    },
  },
  Mutation: {
    createDisaster: (_, { coordinates, type, severity }) => {
      // Generate a unique ID for the new disaster (you can use a library like uuid)
      const disasterId = Helpers.generateUniqueId();

      // Create the disaster object
      const newDisaster = {
        disasterId,
        coordinates,
        type,
        severity,
      };

      // Assuming there's a function in your helpers.js to add a disaster to your data store
      Helpers.addDisaster(newDisaster);

      // Return the created disaster object
      return newDisaster;
    },
    createParagraph: (_, { paragraph }) => {
      // Generate a unique ID for the new paragraph (you can use a library like uuid)
      const paragraphId = Helpers.generateUniqueId();

      // Create the paragraph object
      const newParagraph = {
        paragraphId,
        paragraph,
      };

      // Assuming there's a function in your helpers.js to add a paragraph to your data store
      Helpers.addParagraph(newParagraph);

      // Return the created paragraph object
      return newParagraph;
    },
    // Implement other mutation resolvers as needed
  },
};

export default resolvers;
