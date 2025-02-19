import { StarIcon } from "lucide-react";

export default function ReviewItem() {
    return (
        <div className="mb-4 border-b pb-4 last:border-b-0">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold">bon article</h3>
                <div className="flex">
                    <StarIcon />
                </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
                ceci est la description
            </p>
            <div className="text-xs text-gray-500 mt-2">
                Par toto le 01/01/2024
            </div>
        </div>
    );
}
