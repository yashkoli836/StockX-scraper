import { IResolvers } from 'graphql-tools';
import { ScrapingService } from '../../backend/src/services/scrapingService';

const scrapingService = new ScrapingService();

const resolvers: IResolvers = {
  Query: {
    scrapeProduct: async (_, { url }) => {
      try {
        const productData = await scrapingService.scrape(url);
        return productData;
      } catch (error) {
        throw new Error(`Failed to scrape product: ${error.message}`);
      }
    },
  },
};

export default resolvers;