import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import gallery1 from "../../assets/gallery/Echoes_of_Emotion.png";
import gallery2 from "../../assets/gallery/The_Quiet_Gaze.png";
import gallery3 from "../../assets/gallery/Riverside_Serenity.png";
import gallery4 from "../../assets/gallery/Autumn_Bounty.png";
import gallery5 from "../../assets/gallery/City_Twilight.png";
import gallery6 from "../../assets/gallery/The_Whispering_Woods.png";
export default function CarouselSize() {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
    const details = ['Echoes of Emotion (Abstract) ', 'The Quiet Gaze (Portrait)', 'Riverside Serenity (Landscape)', 'Autumn Bounty (Still Life)', 'City Twilight (Urban Scene)', 'The Whispering Woods (Magical Realism Landscape)'];

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-3/4 mx-auto"
        >
            <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="bg-dark-color">
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 rounded-2xl bg-dark-color text-beige-color overflow-hidden group">
                                    <Image width={300} height={300} src={images[index]} alt={`Gallery ${index + 1}`} className="hover:scale-105 transition-transform duration-300 text-3xl font-semibold" />
                                    <div className="p-3">
                                        <h3 className="text-sm font-semibold group-hover:text-green-color">{details[index]}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
