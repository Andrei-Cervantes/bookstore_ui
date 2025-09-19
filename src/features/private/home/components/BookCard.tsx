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
    <Card className="w-full">
      <CardContent className="flex flex-col items-center">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{author}</p>
        <p>{publishYear}</p>
        <p>{genre.join(", ")}</p>
        <p>{pages}</p>
        <p>{language}</p>
      </CardContent>
    </Card>
  );
};

export default BookCard;
