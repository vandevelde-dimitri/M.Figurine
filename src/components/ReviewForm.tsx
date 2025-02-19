"use client";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Rating() {
    const [rating, setRating] = useState(0);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Avis sur le produit</CardTitle>
                <CardDescription>
                    Partagez votre expérience avec ce produit.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="rating">Note</Label>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-6 w-6 cursor-pointer ${
                                            star <= rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title">Titre</Label>
                            <Input
                                id="title"
                                placeholder="Résumez votre avis en un titre"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Décrivez votre expérience avec le produit"
                                rows={4}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Annuler</Button>
                <Button>Soumettre</Button>
            </CardFooter>
        </Card>
    );
}
