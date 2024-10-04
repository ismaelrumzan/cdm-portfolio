import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FieldSet, Records } from "airtable";
import { MDXRemote } from "next-mdx-remote/rsc";

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export function Portfolio({ items }: { items: Records<FieldSet> }) {
  console.log(items);
  return (
    items.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const tags = item.fields.Tags as readonly string[];
          return (
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              key={item.id}>
              <Image
                alt={item.fields.Title as string}
                className="h-[250px] sm:h-[400px] w-full object-cover"
                height={300}
                src={item.fields.Image as string}
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {item.fields.Title as string}
                </h3>
                <Label className="text-gray-500">{`From ${formatDate(
                  item.fields.Start as string
                )} to ${
                  item.fields.End
                    ? formatDate(item.fields.End as string)
                    : `current`
                }`}</Label>
                <div className="prose max-w-none dark:text-white">
                  <MDXRemote source={item.fields.Description as string} />
                </div>
                {tags.length > 0 ? (
                  <div className="grid-flow-row mt-3">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="mr-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}
