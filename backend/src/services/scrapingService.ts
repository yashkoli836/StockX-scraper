import { Injectable } from 'injection-js';
import { chromium } from 'playwright'; 
import { ScrapingError } from '../errors/ScrapingError';
import 'reflect-metadata';

export class ScrapingService {
    private maxRetries: number = 3;

    public async scrapeProductData(url: string): Promise<any> {
        let retries = 0;

        while (retries < this.maxRetries) {
            try {
                const browser = await chromium.launch();
                const page = await browser.newPage();
                await page.goto(url);

                const productData = await this.extractProductData(page);
                await browser.close();
                return productData;
            } catch (error) {
                retries++;
                if (retries === this.maxRetries) {
                    if (error instanceof Error) {
                        throw new ScrapingError(`Failed to scrape data from ${url}: ${error.message}`);
                    } else {
                        throw new ScrapingError(`Failed to scrape data from ${url}: Unknown error`);
                    }
                }
            }
        }
    }

    private async extractProductData(page: any): Promise<any> {
        const productName: string = await page.$eval('.product-name', (el: Element) => el.textContent?.trim() || '');
        const marketPrice: string = await page.$eval('.market-price', (el: Element) => el.textContent?.trim() || '');
        const sizeAvailability: string[] = await page.$$eval('.size-availability', (els: Element[]) => els.map(el => el.textContent?.trim() || ''));
        const description: string = await page.$eval('.description', (el: Element) => el.textContent?.trim() || '');
        const brandName: string = await page.$eval('.brand-name', (el: Element) => el.textContent?.trim() || '');
        const productDetails: string = await page.$eval('.product-details', (el: Element) => el.textContent?.trim() || '');
        const productImages: string[] = await page.$$eval('.product-image', (els: HTMLImageElement[]) => els.map(el => el.src));

        return {
            productName,
            marketPrice,
            sizeAvailability,
            description,
            brandName,
            productDetails,
            productImages
        };
    }
}
