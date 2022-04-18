const { Telegraf } = require('telegraf')
const rite = require('./pss')
const bot = new Telegraf(rite)
 

bot.start((ctx) => ctx.replyWithHTML(`
tBTC Ultima Airdrop, 
Welcome to Participate in our airdrop!

Price 1 tBTC : $38,923.78

👤 Total earn for Participant : 0.011 tBTC (~$2500)
🏆 For the top 200 Referrals, each get 0.03 $tBTC (~$7000)
📆 End date : april 28
⏳ Distribution : Instant withdrawal

🌐 Website: https://tbtc.network/

📊 Market : <a href='https://coinmarketcap.com/currencies/tbtc/'>coinmarketcap</a>, <a href='https://coincodex.com/crypto/tbtc/exchanges/'>Coincodex</a>

Please perform the tasks below to earn to 0.011 tBTC (~$3500).
( For all Participant )

📢 Mandatory Task:

🔰 Join our Telegram Channel.

🔰 Follow us on <a href='https://twitter.com/tbtc_official?s=21'> Twitter</a>, retweet the pinned post & tag 3 friends.


🔰 Submit any ERC-20 address of your choice as airdrop will be deposited directly there.

`, {
    reply_markup: {
        inline_keyboard: [
        [{text: "registration", callback_data: 'reg'},]
    ]}
}, { 
    disable_web_page_preview: true 
}))


bot.action('reg', ctx => {
    ctx.replyWithHTML(`
    🔘 Join our <a href='https://t.me/+8Dxdjo-GIVtiOTg0'>Telegram Channel</a>

    Then click "Done" button.
    `,{
        reply_markup: {
            inline_keyboard:[
            [{text: "Done", callback_data: 'done'},]
        ]}
    },
    {   disable_web_page_preview: true  } 
    )

})



bot.action('done', ctx => {
    ctx.replyWithHTML(`
    🔘 Follow us on <a href='https://twitter.com/tbtc_official?s=21'> Twitter</a>, retweet the pinned post & tag 3 friends.

    Then click "Continue" button.
    `,{
        reply_markup: {
            inline_keyboard:[
            [{text: "Continue", callback_data: 'con'},]
        ]}
    },
    {   disable_web_page_preview: true  } 
    )

})

bot.action('con', ctx => {
    ctx.replyWithHTML(`
    Then submit your Twitter profile link:
    (Example: https://twitter.com/username)
    `,
    {   disable_web_page_preview: true  } 
    )

})

const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const regex = new RegExp(expression)

bot.hears(regex, (ctx) => {
    ctx.replyWithHTML(`
    Then click "Continue" button
    `,{
        reply_markup: {
            inline_keyboard:[
            [{text: "Continue", callback_data: 'cont'},]
        ]}
    },
    {   disable_web_page_preview: true  })
})

bot.action('cont', ctx => {
    ctx.replyWithHTML(`
    Submit any ERC-20 address of your choice as airdrop will be deposited directly there.
    `,
    {   disable_web_page_preview: true  } 
    )
})

const j = /^(0x){1}[0-9a-fA-F]{40}$/i
const reg = new RegExp(j)

bot.hears(reg, ctx => {
    ctx.replyWithHTML(`
    Address successfully submitted

    Click on "OK"
    `,{
        reply_markup: {
            inline_keyboard:[
            [{text: "OK", callback_data: 'ok'},]
        ]}
    },
    {   disable_web_page_preview: true  } 
    )
})


bot.action('ok', ctx => {
    ctx.replyWithHTML(`
    Congratulations !!!
    `,
    {   disable_web_page_preview: true  } 
    )
})

bot.launch()

