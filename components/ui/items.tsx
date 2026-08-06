import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { ProjectImage } from "@/components/ui/project-image";

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
};

export function Portfolio({ items = projects }: { items?: Project[] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
      {items.map((item, index) => (
        <article
          className="overflow-hidden border-b border-foreground/15 pb-8 animate-fade-up"
          style={{ animationDelay: `${Math.min(index, 5) * 80}ms` }}
          key={item.id}
        >
          <ProjectImage
            src={item.image}
            alt={item.title}
            gallery={item.gallery}
          />
          <div className="space-y-3">
            <h3 className="font-display text-2xl text-olive leading-snug">
              {item.title}
            </h3>
            <Label className="text-muted-foreground font-normal">
              {`From ${formatDate(item.start)} to ${
                item.end ? formatDate(item.end) : "current"
              }`}
            </Label>
            <div className="prose max-w-none prose-p:text-foreground/80 prose-headings:font-display prose-headings:text-olive">
              <MDXRemote source={item.description} />
            </div>
            {item.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-sm bg-sage/20 text-olive border-0 font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
            {item.client !== "Hidden" ? (
              <Alert className="mt-2 text-sm p-3 border-foreground/10 bg-card/60">
                <AlertDescription>Client: {item.client}</AlertDescription>
              </Alert>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
