import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserDropdown = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full h-[40px]">
          <SelectValue placeholder="UtkarshDhairyaPanwar" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Profile</SelectLabel>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
            <SelectItem value="c">Option C</SelectItem>
            <SelectItem value="d">Option D</SelectItem>
            <SelectItem value="e">Option E</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserDropdown;
