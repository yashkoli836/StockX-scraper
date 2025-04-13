import { Request, Response } from 'express';
import { ScrapingService } from '../services/scrapingService';

class ScrapingController {
    private scrapingService: ScrapingService;

    constructor() {
        this.scrapingService = new ScrapingService();
    }

    public async scrapeProductData(req: Request, res: Response): Promise<void> {
        const { url } = req.body;

        try {
            const productData = await this.scrapingService.scrapeProductData(url);
            res.status(200).json(productData);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(500).json({ message: 'Error scraping product data', error: errorMessage });
        }
    }
}

export default ScrapingController;