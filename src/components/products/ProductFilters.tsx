import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getUniqueSizes, getUniqueMaterials, getUniquePrintings } from "@/data/products";

interface ProductFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sizeFilter: string;
  setSizeFilter: (size: string) => void;
  materialFilter: string;
  setMaterialFilter: (material: string) => void;
  printingFilter: string;
  setPrintingFilter: (printing: string) => void;
  onClearFilters: () => void;
}

const ProductFilters = ({
  searchQuery,
  setSearchQuery,
  sizeFilter,
  setSizeFilter,
  materialFilter,
  setMaterialFilter,
  printingFilter,
  setPrintingFilter,
  onClearFilters,
}: ProductFiltersProps) => {
  const sizes = getUniqueSizes();
  const materials = getUniqueMaterials();
  const printings = getUniquePrintings();

  const hasActiveFilters = searchQuery || sizeFilter || materialFilter || printingFilter;

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Select value={sizeFilter} onValueChange={setSizeFilter}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sizes</SelectItem>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={materialFilter} onValueChange={setMaterialFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Material" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Materials</SelectItem>
            {materials.map((material) => (
              <SelectItem key={material} value={material}>
                {material}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={printingFilter} onValueChange={setPrintingFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Printing" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Printing</SelectItem>
            {printings.map((printing) => (
              <SelectItem key={printing} value={printing}>
                {printing}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="mr-1 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
