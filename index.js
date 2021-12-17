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
        base: '',
    },
    {
        name: 'HindustanTimes',
        address: 'https://www.hindustantimes.com/',
        base: 'https://www.hindustantimes.com/',

    },
    {
        name: 'Gaurdian',
        address: 'https://www.theguardian.com/international',
        base: '',

    },
    {
        name: 'NDTV',
        address: 'https://www.ndtv.com/',
        base: '',

    },
    {
        name: 'theWire',
        address: 'https://thewire.in/',
        base: '',

    },
    {
        name: 'talkEsports',
        address: 'https://www.talkesport.com/',
        base: '',

    },
    {
        name: 'gadgets360',
        address: 'https://gadgets.ndtv.com/',
        base: '',

    },
    {
        name: 'TechSpots',
        address: 'https://www.techspot.com/',
        base: '',

    },
    {
        name: 'Kotaku',
        address: 'https://kotaku.com/',
        base: '',

    },
    {
        name: 'DoTEspotrs',
        address: 'https://dotesports.com/',
        base: '',

    },
    {
        name: 'theIndianExpress',
        address: 'https://indianexpress.com/',
        base: '',

    },
    {
        name: 'News18',
        address: 'https://www.news18.com/',
        base: '',

    },
    {
        name: 'DecanChronicle',
        address: 'https://www.deccanchronicle.com/',
        base: 'https://www.deccanchronicle.com/',
    },
    {
        name: 'TelenganaToday',
        address: 'https://telanganatoday.com/',
        base: '',

    },
    {
        name: 'FirstPost',
        address: 'https://www.firstpost.com/',
        base: '',

    },
    {
        name: 'ABP',
        address: 'https://news.abplive.com/',
        base: '',

    },
    {
        name: 'RepublicWorld',
        address: 'https://www.republicworld.com/',
        base: '',

    },
    {
        name: 'theFreePressJournal',
        address: 'https://www.freepressjournal.in/',
        base: '',

    },
    {
        name: 'theQuint',
        address: 'https://www.thequint.com/',
        base: '',

    }

]

const articles = []

newspappers.forEach(newspapper => {
    axios.get(newspapper.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
                //$('a:contains("Put your keywords here")', html)
            $('a:contains("Omicron")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: newspapper.base + url,
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