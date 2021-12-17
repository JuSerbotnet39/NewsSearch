const PORT = 8000
const express = require('express')
const axioss = require('axios')
const cheerio = require('cheerio')
const { default: axios } = require('axios')
const { response } = require('express')

const app = express()

const newspappers = [{
        name: 'TimesofIndia',
        address: 'https://timesofindia.indiatimes.com/',
    },
    {
        name: 'HindustanTimes',
        address: 'https://www.hindustantimes.com/',
    },
    {
        name: 'Gaurdian',
        address: 'https://www.theguardian.com/international',
    },
    {
        name: 'NDTV',
        address: 'https://www.ndtv.com/',
    },
    {
        name: 'theWire',
        address: 'https://thewire.in/',
    },
    {
        name: 'talkEsports',
        address: 'https://www.talkesport.com/',
    },
    {
        name: 'gadgets360',
        address: 'https://gadgets.ndtv.com/',
    },
    {
        name: 'TechSpots',
        address: 'https://www.techspot.com/',
    },
    {
        name: 'Kotaku',
        address: 'https://kotaku.com/',
    },
    {
        name: 'DoTEspotrs',
        address: 'https://dotesports.com/',
    },
    {
        name: 'theIndianExpress',
        address: 'https://indianexpress.com/',
    },
    {
        name: 'News18',
        address: 'https://www.news18.com/',
    },
    {
        name: 'DecanChronicle',
        address: 'https://www.deccanchronicle.com/',
    },
    {
        name: 'TelenganaToday',
        address: 'https://telanganatoday.com/',
    },
    {
        name: 'FirstPost',
        address: 'https://www.firstpost.com/',
    },
    {
        name: 'ABP',
        address: 'https://news.abplive.com/',
    },
    {
        name: 'RepublicWorld',
        address: 'https://www.republicworld.com/',
    },
    {
        name: 'theFreePressJournal',
        address: 'https://www.freepressjournal.in/',
    },
    {
        name: 'theQuint',
        address: 'https://www.thequint.com/',
    }

]

const articles = []

newspappers.forEach(newspapper => {
    axios.get(newspapper.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("Omicron")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url,
                    source: newspapper.name
                })
            })

        })
})

app.get('/', (req, res) => {
    res.json('Welcome to me learning about API')
})

app.get('/news', (req, res) => {
    res.json(articles)
})



app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`))