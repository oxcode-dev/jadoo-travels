import WeatherIcon from '../assets/img/weather-icon.svg'
import FlightIcon from '../assets/img/flight-icon.svg'
import MicrophoneIcon from '../assets/img/microphone-icon.svg'
import SettingIcon from '../assets/img/setting-icon.svg'
import RomeImg from '../assets/img/rome.svg'
import LondonImg from '../assets/img/london.svg'
import EuropeImg from '../assets/img/city.svg'
import PaymentIcon from '../assets/img/payment-icon.svg'
import CabIcon from '../assets/img/cab-icon.svg'
import DestinationIcon from '../assets/img/destination-icon.svg'


export const navigationLists = [
    'Destinations', 'Hotels', 'Flights', 'Bookings'
]

type servicesListType = {
    title: string,
    description: string,
    icon: string
}

export const servicesLists: servicesListType[] = [
    {
        title: 'Calculated Weather', 
        description: 'Built Wicket longer admire do barton vanity itself do in it.', 
        icon: WeatherIcon
    },
    {
        title: 'Best Flights', 
        description: 'Engrossed listening. Park gate sell they west hard for the.', 
        icon: FlightIcon
    },
    {
        title: 'Local Events', 
        description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.', 
        icon: MicrophoneIcon
    },
    {
        title: 'Customization', 
        description: 'We deliver outsourced aviation services for military customers', 
        icon: SettingIcon
    },
]

type destinationsListType = {
    name: string,
    description: string,
    image: string | SVGAElement,
    cost: string,
    days: string,
}

export const destinationsLists: destinationsListType[] = [
    {
        name: 'Rome, Italy', 
        description: 'Built Wicket longer admire do barton vanity itself do in it.', 
        image: RomeImg,
        cost: '$1800',
        days: '10 days trip',
    },
    {
        name: 'London, UK', 
        description: 'Engrossed listening. Park gate sell they west hard for the.', 
        image: LondonImg,
        cost: '$1300',
        days: '15 days trip',
    },
    {
        name: 'Full Europe', 
        description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.', 
        image: EuropeImg,
        cost: '$3000',
        days: '28 days trip',
    },
]

type tipListType = {
    image: string,
    heading: string,
    description: string,
}

export const tipsList :tipListType[] = [
    {
        heading: 'Choose Destination',
        image: DestinationIcon,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit.',
    },
    {
        heading: 'Make Payment',
        image: PaymentIcon,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit.',
    },
    {
        heading: 'Reach Airport on Selected Date',
        image: CabIcon,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit.',
    },
]