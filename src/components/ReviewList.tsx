import ReviewItem from "./ReviewItem";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

export default function ReviewList() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Avis des clients</CardTitle>
                <CardDescription>
                    Découvrez ce que les autres pensent de ce produit.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                    <ReviewItem />
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
