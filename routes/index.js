const express = require('express')
const puppeteer = require('puppeteer')
const router = express.Router()
let browser = null
puppeteer.launch().then(async (result) => {
    browser = result
})

const host = process.env.TARGET_HOST

/* Handle any incoming pages. */
router.get('/**', async (req, res, next) => {
    try {
        const page = await browser.newPage()
        await page.goto(host + req.url)
        res.send(await page.content())
    } catch (e) {
        console.log(e)
        res.status(404).send('')
    }

})

module.exports = router
