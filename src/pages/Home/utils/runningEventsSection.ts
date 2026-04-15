export interface Event {
  title: string
  location: string
  date: string
  time: string
  price: string
  image: string
}
export const events: Event[] = [
  {
    title: 'Women Marathon Event 2024',
    location: '710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY',
    date: 'OCT 20, 2024',
    time: 'START 06:00 AM - UNTIL FINISH',
    price: '$95',
    image:
      'https://www.shutterstock.com/image-photo/athlete-trail-running-desert-landscape-260nw-1323007985.jpg',
  },
  {
    title: 'Women Marathon Event 2023',
    location: '710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY',
    date: 'OCT 20, 2023',
    time: 'START 06:00 AM - UNTIL FINISH',
    price: '$45',
    image:
      'https://www.shutterstock.com/image-photo/running-athletes-jogging-on-trail-260nw-1273599259.jpg',
  },
]
