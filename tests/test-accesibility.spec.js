const{test, expect}=require('@playwright/test');
import AxeBuilder from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';
import fs from 'fs';

test("Escanear la pagina completa", async ({ page }) => {
    await page.goto("https://www.thetesttribe.com/my-account");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .analyze();
    const reportHTML = createHtmlReport({
        results: accessibilityScanResults, 
        options: {
            projectKey: 'I need only raw HTML',
            doNotCreateReportFile: true,
        },
    });
    console.log('reportHTML tendrá el contenido completo del informe HTML');
    if (!fs.existsSync('build/reports/saveReportHere.html')) {
        fs.mkdirSync('build/reports', {
            recursive: true,
        });
    }
    fs.writeFileSync('build/reports/saveReportHere.html', reportHTML);
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("Escanear un parte de la pagina", async ({ page }) => {
    await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include('.woocommerce')
        .analyze();
    const reportHTML = createHtmlReport({
        results: accessibilityScanResults,
        options: {
            projectKey: 'I need only raw HTML',
            doNotCreateReportFile: true,
        },
    });
    if (!fs.existsSync('build/reports/saveReportParte.html')) {
        fs.mkdirSync('build/reports', {
            recursive: true,
        });
    }
    fs.writeFileSync('build/reports/saveReportParte.html', reportHTML);
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("Escanear un elemento especifico", async ({ page }) => {
    await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include('#username')
        .analyze();
    const reportHTML = createHtmlReport({
        results: accessibilityScanResults,
        options: {
            projectKey: 'I need only raw HTML',
            doNotCreateReportFile: true,
        },
    });
    if (!fs.existsSync('build/reports/saveReportElemento.html')) {
        fs.mkdirSync('build/reports', {
            recursive: true,
        });
    }
    fs.writeFileSync('build/reports/saveReportElemento.html', reportHTML);
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("Escanear la pagina completa usando withTags para WCAG 2.1 A y AA", async ({ page }) => {
    await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag21a', 'wcag21aa'])
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    const reportHTML = createHtmlReport({
        results: accessibilityScanResults,
        options: {
            projectKey: 'I need only raw HTML',
            doNotCreateReportFile: true,
        },
    });
    if (!fs.existsSync('build/reports/saveReportWCAG.html')) {
        fs.mkdirSync('build/reports', {
            recursive: true,
        });
    }
    fs.writeFileSync('build/reports/saveReportWCAG.html', reportHTML);
});

test("Escanear la pagina excluyendo un elemento'", async ({ page }) => {
    await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .exclude('[data-id="tab1"]')
        .analyze();
    const reportHTML = createHtmlReport({
        results: accessibilityScanResults,
        options: {
            projectKey: 'I need only raw HTML',
            doNotCreateReportFile: true,
        },
    });
    if (!fs.existsSync('build/reports/saveReportExclusion.html')) {
        fs.mkdirSync('build/reports', {
            recursive: true,
        });
    }
    fs.writeFileSync('build/reports/saveReportExclusion.html', reportHTML);
    expect(accessibilityScanResults.violations).toEqual([]);
});
