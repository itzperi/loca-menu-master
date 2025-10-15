import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  name: string;
  price: number;
  description?: string;
  customizable?: boolean;
}

export const MenuItem = ({ name, price, description, customizable = false }: MenuItemProps) => {
  const handleOrder = () => {
    const message = `Hi, I'd like to order: ${name} (₹${price})`;
    window.open(`https://wa.me/919789808325?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold leading-tight">{name}</CardTitle>
          <span className="text-primary font-display font-semibold text-xl whitespace-nowrap">₹{price}</span>
        </div>
        {customizable && (
          <Badge variant="secondary" className="w-fit text-xs">customizable</Badge>
        )}
      </CardHeader>
      {description && (
        <CardContent className="pb-3">
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardContent>
      )}
      <CardFooter>
        <Button 
          onClick={handleOrder}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all"
        >
          ADD
        </Button>
      </CardFooter>
    </Card>
  );
};
