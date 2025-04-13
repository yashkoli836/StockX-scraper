import { Router } from 'express';
import ScrapingController from '../controllers/scrapingController';

const router = Router();
const scrapingController = new ScrapingController();

router.post('/scrape', scrapingController.scrapeProductData.bind(scrapingController));

export const setRoutes = (app: any) => {
  // Define your routes here
app.get('/', (req: import('express').Request, res: import('express').Response): void => {
    res.send('API is running');
});

  app.use('/api', router);
};