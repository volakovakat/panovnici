import React from 'react';
import J from '../../Images/lucembursky.jpeg';
import K from '../../Images/karelIV.jpeg';
const rulers = [
    {
        id: 1,
        name: 'Jan Lucemburský',
        href: '#',
        imageSrc: J,
        imageAlt: "Jan Lucemburský",
        date: '1310–1346',
    },
    {
        id: 2,
        name: 'Karel IV.',
        href: '#',
        imageSrc: K,
        imageAlt: "Karel IV.",
        date: '1346–1378',
    },
    {
        id: 3,
        name: 'Jan Lucemburský',
        href: '#',
        imageSrc: J,
        imageAlt: "Jan Lucemburský",
        date: '1310–1346',
    },
    {
        id: 4,
        name: 'Karel IV.',
        href: '#',
        imageSrc: K,
        imageAlt: "Karel IV.",
        date: '1346–1378',
    },
    {
        id: 5,
        name: 'Jan Lucemburský',
        href: '#',
        imageSrc: J,
        imageAlt: "Jan Lucemburský",
        date: '1310–1346',
    },
    {
        id: 6,
        name: 'Karel IV.',
        href: '#',
        imageSrc: K,
        imageAlt: "Karel IV.",
        date: '1346–1378',
    },
    {
        id: 7,
        name: 'Jan Lucemburský',
        href: '#',
        imageSrc: J,
        imageAlt: "Jan Lucemburský",
        date: '1310–1346',
    },
    {
        id: 8,
        name: 'Karel IV.',
        href: '#',
        imageSrc: K,
        imageAlt: "Karel IV.",
        date: '1346–1378',
    },
]

export default function RulerTile() {
    return (
        <div className="bg-orange-200">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-center">Panovníci českých zemí</h1>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {rulers.map((ruler) => (
                        <div key={ruler.id} className="group relative drop-shadow-md bg-white rounded-md px-8 py-4">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={ruler.imageSrc}
                                    alt={ruler.imageAlt}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={ruler.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {ruler.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{ruler.date}</p>
                                </div>
                                <button className="btn btn-md btn-light bg-orange-100 text-orange-500">Zjistit víc</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}