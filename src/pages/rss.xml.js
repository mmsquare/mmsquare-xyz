import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Ming Ma — Writing',
    description: 'Observations on work, culture, and getting older in tech.',
    site: context.site,
    items: [
      {
        title: 'Who should pick up the bill',
        pubDate: new Date('2019-09-28'),
        description: 'From Silicon Valley to China — Chapter 5',
        link: 'https://medium.com/@ming_ma/who-should-pick-up-the-bill-b3c859be372',
      },
      {
        title: 'Age Gracefully in Tech Industry',
        pubDate: new Date('2019-06-07'),
        description: 'Stay young and appreciate being old.',
        link: 'https://medium.com/@ming_ma/age-gracefully-in-tech-industry-f925b50af248',
      },
      {
        title: '996',
        pubDate: new Date('2019-04-13'),
        description: 'From Silicon Valley to Beijing — Chapter 4',
        link: 'https://medium.com/@ming_ma/996-85f6cf76d44b',
      },
      {
        title: 'How to work with people who are 10 years younger than you',
        pubDate: new Date('2019-02-16'),
        description: 'From Silicon Valley to Beijing — Chapter 3',
        link: 'https://medium.com/@ming_ma/how-to-work-with-people-who-are-10-years-younger-than-you-71cd378b30e',
      },
      {
        title: 'Beautiful China',
        pubDate: new Date('2018-11-24'),
        description: 'From Silicon Valley to Beijing — Chapter 2',
        link: 'https://medium.com/@ming_ma/beautiful-china-d74477c4052f',
      },
      {
        title: 'From Silicon Valley to Beijing',
        pubDate: new Date('2018-09-17'),
        description: 'Chapter 1: My first month into the new adventure',
        link: 'https://medium.com/@ming_ma/from-silicon-valley-to-beijing-5dcad95985b',
      },
    ],
    customData: `<language>en-us</language>`,
  });
}
