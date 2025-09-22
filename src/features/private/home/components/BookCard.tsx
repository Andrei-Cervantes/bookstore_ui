import { Card, CardContent } from "@/shared/components/ui/card";

interface Props {
  title: string;
  description: string;
  image: string;
  author: string;
  publishYear: string;
  genre: string[];
  pages: number;
  language: string;
}

const BookCard = ({
  title,
  description,
  image,
  author,
  publishYear,
  genre,
  pages,
  language,
}: Props) => {
  return (
    <Card className="w-ffull max-w-[215px] p-0">
      <CardContent className="flex flex-col gap-4 p-4">
        <img src={image} alt={title} className="h-[180px]" />
        <div className="space-y-2">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-muted-foreground">
              by {author}, {publishYear}
            </p>
          </div>
          <p className="text-sm line-clamp-3 overflow-hidden text-ellipsis">
            {description}
          </p>
          <p>{genre.join(", ")}</p>
          <div className="flex gap-2 justify-between text-sm text-muted-foreground pt-4">
            <p>{language}</p>
            <p>{pages} pages</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
