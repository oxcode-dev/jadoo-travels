import WeatherIcon from '../assets/img/weather-icon.svg'
import FlightIcon from '../assets/img/flight-icon.svg'
import MicrophoneIcon from '../assets/img/microphone-icon.svg'
import SettingIcon from '../assets/img/setting-icon.svg'

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
        image: WeatherIcon,
        cost: '$1800',
        days: '10 days trip',
    },
    {
        name: 'London, UK', 
        description: 'Engrossed listening. Park gate sell they west hard for the.', 
        image: FlightIcon,
        cost: '$1300',
        days: '15 days trip',
    },
    {
        name: 'Full Europe', 
        description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.', 
        image: MicrophoneIcon,
        cost: '$3000',
        days: '28 days trip',
    },
]